import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";

import { AuthService } from 'auth';

import { LoggerService } from 'utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = '/signin';
  public userInfo: any = '';  
  public showAnalyserButton: boolean = false;
  public showBackButton: boolean = false;
  public showHeaderNavBar: boolean = true;

  constructor(private authService: AuthService,
              private router: Router, 
              private route: ActivatedRoute,
              private logger: LoggerService,
    private _location: Location
    ) {

    // this.router.events.subscribe((event) => {

    //   if (event instanceof NavigationEnd) {

    //     this.returnUrl = event.url;

    //     this.logger.info('NavigationBarComponent returnUrl: ' + this.returnUrl);
    //   }

    // });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
        this.logger.info("NavigationBarComponent returnUrl: " + this.returnUrl);

        // this.showAnalyserButton = this.returnUrl === "/spends";
        this.showBackButton =
          route.root.firstChild.snapshot.data["showBackButton"] || false;
        this.showHeaderNavBar =
          route.root.firstChild.snapshot.data["showHeaderNavBar"] === undefined
            ? true
            : route.root.firstChild.snapshot.data["showHeaderNavBar"];
      }
    });

  }

  backClicked() {
    this._location.back();
  }

  public logout() {

    this.authService.logout(this.returnUrl || '/');
  }

}
