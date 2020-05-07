import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AuthService } from "auth";
import * as _ from "lodash";

const BASE_URL = "http://159.89.168.255:5000";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  token: string = _.isEmpty(this.authService.getAccessToken())
    ? ""
    : this.authService.getAccessToken();
  userInfo: any = JSON.parse(localStorage.getItem("userData"));
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public login(params: {
    email: string;
    password: string;
  }): Observable<Object> {
    const url = `${BASE_URL}/main/auth/sign-in`;
    // const body = new HttpParams()
    //   .set("email", params.email)
    //   .set("password", params.password);
    const body = this.stringParams(params).toString();
    return this.httpClient
      .post<Object>(url, body, {
        headers: new HttpHeaders().set(
          "Content-Type",
          "application/x-www-form-urlencoded"
        ),
      })
      .pipe(
        // retry(2),
        catchError(this.handleError)
      );
  }

  stringParams(params: object = {}) {
    let body = new HttpParams();
    _.forEach(params, (value, key) => {
      body = body.set(key, value);
    });
    return body;
  }

  public post(url: string, params: object = {}): Observable<Object> {
    const postUrl = `${BASE_URL}/${url}`;
    const body = this.stringParams(params).toString();
    console.log("body", body);
    let headers = new HttpHeaders();
    const token: string = _.isEmpty(this.authService.getAccessToken())
      ? ""
      : this.authService.getAccessToken();
    const tokenType = _.get(this.userInfo, "token_type", "Bearer");

    headers = headers.set("Content-Type", "application/x-www-form-urlencoded");
    headers = headers.set("Authorization", `${tokenType} ${token}`);

    return this.httpClient
      .post<Object>(postUrl, body, {
        headers,
      })
      .pipe(
        // retry(2),
        catchError(this.handleError)
      );
  }

  //   public get(
  //     url: string,
  //     params: object = { test: 1234, test1: "abc" }
  //   ): Observable<Object> {
  //     const getUrl = `${BASE_URL}/${url}`;
  //     console.log(
  //       "=============this.stringParams(params)======================="
  //     );
  //     console.log(this.stringParams(params));
  //     console.log("====================================");
  //     return this.httpClient
  //       .get<Object>(getUrl, {
  //         headers: new HttpHeaders().set("Content-Type", "application/json"),
  //         params: this.stringParams(params)
  //       })
  //       .pipe(retry(2), catchError(this.handleError));
  //   }

  public get(
    url: string,
    params: object = {},
    isUrlEncoded: boolean = true
  ): Observable<Object> {
    const getUrl = `${BASE_URL}/${url}`;

    const headerType: string = isUrlEncoded
      ? "application/x-www-form-urlencoded"
      : "application/json";
    let headers = new HttpHeaders();
    const isTokenAvailable = _.isEmpty(this.authService.getAccessToken());
    const token: string = isTokenAvailable
      ? ""
      : this.authService.getAccessToken();
    const tokenType = _.get(this.userInfo, "token_type", "Bearer");

    headers = headers.set("Content-Type", headerType);
    if (!_.isEmpty(token)) {
      headers = headers.set("Authorization", `${tokenType} ${token}`);
    }
    return this.httpClient
      .get<Object>(getUrl, {
        params: { ...params },
        headers,
      })
      .pipe(
        // retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  // public get(url: string, params: object): Observable<Object> {
  //   return this.httpClient.get<Object>(url, { params: { ...params } }).pipe(
  //     retry(2),
  //     catchError(this.handleError)
  //   );
  // }

  // handleError(error: HttpErrorResponse) {
  //   return throwError(error);
  // }

  // public post(url: string, params: object) {
  //   this.httpClient
  //     .post<any>(url, { params: { ...params } })
  //     .subscribe(data => {
  //       console.log("==============Response data======================");
  //       console.log(data);
  //       console.log("====================================");
  //     });
  // }

  // public put(url: string, params: object) {
  //   this.httpClient.put<any>(url, { params: { ...params } }).subscribe(data => {
  //     console.log("==============Response data======================");
  //     console.log(data);
  //     console.log("====================================");
  //   });
  // }

  // public delete(url: string, params: object) {
  //   this.httpClient
  //     .delete<any>(url, { params: { ...params } })
  //     .subscribe(data => {
  //       console.log("==============Response data======================");
  //       console.log(data);
  //       console.log("====================================");
  //     });
  // }
}
