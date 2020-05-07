import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Auth, User } from "auth";

import { LoggerService } from "utils";

import * as crypto from "crypto";
import * as util from "util";

interface HttpOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
}

const HTTP_SERVER_ERROR_CONNECTION_REFUSED = "Connection refused";

@Injectable({
  providedIn: "root",
})
export class LocalAuthService extends Auth {
  protected readonly loginUrl =
    "https://api-stage.paysack.com/demo/v2/session/challenge/";
  protected readonly registerUrl = "http://localhost:3001/register/";

  protected httpOptions: HttpOptions;

  private userSubject: BehaviorSubject<User>;
  private user: Observable<User>;
  private pbkdf2 = util.promisify(crypto.pbkdf2);

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private logger: LoggerService
  ) {
    super();

    this.logger.info("LocalAuthService constructor()");

    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    if (this.getAccessToken() != "") {
      this.authenticated = true;
    }

    return this.authenticated;
  }

  public getAccessToken(): string {
    if (localStorage.getItem("token")) {
      this.accessToken = localStorage.getItem("token");
    }

    return this.accessToken;
  }

  public getIdToken(): string {
    return this.idToken;
  }

  public setAccessToken(token: string) {
    localStorage.setItem("token", token);
    this.accessToken = token;
    this.logger.info("LocalAuthService: setAccessToken()");
  }

  public createUserWithEmailAndPassword(user: User): Promise<any> {
    return this.httpClient
      .post<any>(this.registerUrl, user, this.getHttpOptions())
      .pipe(
        tap((tokens) => {
          // this.accessToken = token;
          this.accessToken = tokens.access_token;
          this.idToken = tokens.id_token;

          this.logger.info(
            "LocalAuthService: createUserWithEmailAndPassword() completed"
          );

          // this.logger.info('token:' + JSON.stringify(token, null, 2));

          this.userSubject.next(user);

          this.authenticated = true;

          this.router.navigate(["/feed"]);
        })
      )
      .toPromise()
      .catch((error) => {
        if (error === undefined) {
          error = new Error(HTTP_SERVER_ERROR_CONNECTION_REFUSED);
        }

        throw error;
      });
  }

  public login(username: string, body: any): Observable<any> {
    return this.httpClient.post<any>(this.loginUrl + username, body);
  }

  public async loginWithEmailAndPassword(
    username: string,
    password: string
  ): Promise<any> {
    const user: User = new User(username, password);
    this.httpClient
      .get<any>(this.loginUrl + username)
      .pipe(
        tap(async (session) => {
          console.log(session);
          let secret = session.details.pow_secret;
          let salt = Buffer.from(session.details.pow_salt, "hex");
          let prefix = session.details.pow_hash_prefix;
          let key = await this.guessKey(
            secret,
            salt,
            prefix,
            session.details.pow_rounds,
            session.details.key_length
          );
          let iv = crypto.randomBytes(16);

          let encryptedPass = await this.encryptPassword(password, key, iv);
          let body = {
            refNo: iv.toString("hex"),
            id: session._id,
            password: encryptedPass,
          };

          this.login(username, body).subscribe((res) => {
            console.log(res);

            this.accessToken = res.token;
            this.idToken = res.token;

            this.setAccessToken(this.accessToken);

            this.logger.info(
              "LocalAuthService: loginWithEmailAndPassword() completed"
            );

            this.logger.info("tokens:" + JSON.stringify(res, null, 2));

            this.userSubject.next(user);

            this.authenticated = true;
            this.router.navigate(["/feed"]);
          });
        })
      )
      .toPromise()
      .catch((error) => {
        if (error === undefined) {
          error = new Error(HTTP_SERVER_ERROR_CONNECTION_REFUSED);
        }

        throw error;
      });
  }

  public loginWithRedirect() {}
  public async handleRedirectCallback(): Promise<void> {}

  // TODO -> See: collection.service.ts

  public getUser() {
    try {
      return this.userSubject.value;
    } catch (error) {
      return undefined;
    }
  }

  // public login() {
  //   return;
  // }

  public logout(returnUrl: string) {
    this.userSubject.next(null);

    this.authenticated = false;

    this.setAccessToken("");

    this.router.navigate([returnUrl || "/"]);
  }

  protected getHttpOptions(params: HttpParams = null): HttpOptions {
    if (!this.httpOptions) {
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        // observe: 'response',
        params: null,
      };
    }

    this.httpOptions.params = params;

    // this.logger.info(JSON.stringify(this.httpOptions));

    return this.httpOptions;
  }

  protected async encryptPassword(
    password: string,
    key: Buffer,
    iv: Buffer
  ): Promise<string> {
    let cipherName = "aes-256-cbc";

    let cipher = crypto.createCipheriv(cipherName, key, iv);
    cipher.setAutoPadding(true);
    let crypted = cipher.update(password, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
  }

  protected async guessKey(
    secretStr: string,
    salt: Buffer,
    prefix: string,
    powRounds: number,
    keyLen: number
  ): Promise<any> {
    // console.log("Guess key");
    // console.log("secretStr" + secretStr);
    // console.log("salt" + salt);
    // console.log("prefix" + prefix);
    // console.log("powRounds" + powRounds);
    // console.log("keyLen" + keyLen);

    let secret = Number(secretStr);
    let found = false;
    let key;
    let i = 0;
    for (i = 0; i < 200 && found == false; i++) {
      key = await this.pbkdf2(
        `${secret + i}`,
        salt,
        powRounds,
        keyLen,
        "sha512"
      );
      found = key.toString("hex").indexOf(prefix) === 0;

      // console.log("key" + key.toString());
      // console.log("found" + found);
    }
    !found &&
      (() => {
        throw new Error("Max guess limit Reached.Key could not be derived");
      })();

    return key;
  }

  // https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4

  // https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192

  // https://blog.angular-university.io/rxjs-switchmap-operator/ Simulating HTTP requests
  // https://gist.github.com/staltz/868e7e9bc2a7b8c1f754  The introduction to Reactive Programming you've been missing

  // https://angular.io/guide/http#getting-error-details
}
