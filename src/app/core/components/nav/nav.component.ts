import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
} from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";

import { MatSidenav } from "@angular/material";

import { Subscription } from "rxjs";

import { TranslateService } from "@ngx-translate/core";

import { AuthService } from "auth";

import { SidenavService } from "koppr-components";
import { MockDashboardService, ToolPaletteItem } from "dashboard";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { ConfigService, LoggerService } from "utils";
import { DataStore } from "@app/core/store/app.store";
import { ToastReducers } from "@app/core/store/reducers/toast.reducer";
import { HIDE_TOAST, RESET_STATE } from "@app/core/store/actions";
import * as _ from "lodash";
import { ResetStateReducers } from "@app/core/store/reducers/resetstate.reducer";

// interface SideNavRoute {
//   icon?: string;
//   route?: string;
//   title?: string;
// }

export interface Menu {
  cols: number;
  rows: number;
  text: string;
  route: string;
  icon: string;

  isSelected: boolean;
  isDisabled: string;
  path: string[];
}
export interface HamburgerMenu {
  text: string;
  route: string;
  // icon: string;
  // isSelected: boolean;
  // isDisabled: string;
}

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit, OnDestroy {
  hamburgerMenu: HamburgerMenu[] = [
    {
      text: "Settings",
      route: "settings",
    },
    {
      text: "Transactions",
      route: "transactions",
    },
    // {
    //   text: "About Koppr",
    //   route: "about-us"
    // },
    // {
    //   text: "FAQ's",
    //   route: "faq"
    // },
    // {
    //   text: "Contact Us",
    //   route: "contact-us"
    // },
    // {
    //   text: "Terms & Conditions",
    //   route: "terms-and-conditions"
    // },
    // {
    //   text: "Privacy Policy",
    //   route: "privacy-policy"
    // }
  ];

  menuLists: Menu[] = [
    {
      text: "My Account",
      cols: 1,
      rows: 1,
      route: "myaccount",
      icon: "account_box",
      isSelected: true,
      isDisabled: "unset",
      path: ["/myaccount"],
    },
    {
      text: "Payments",
      cols: 1,
      rows: 1,
      route: "payments",
      icon: "payment",
      isSelected: false,
      isDisabled: "unset",
      path: [
        "/payments",
        "/money-transfer",
        "/mobile-recharge",
        "/dth-recharge",
        "/landline-bill",
        "/datacard-bill",
        "/hotel-booking",
        "/loan-pay",
        "/aeps",
      ],
    },
    {
      text: "Earnings",
      cols: 1,
      rows: 1,
      route: "earnings-loyalty",
      icon: "monetization_on",
      isSelected: false,
      isDisabled: "unset",
      path: ["/earnings-loyalty"],
    },
    {
      text: "My Ledgers",
      cols: 1,
      rows: 1,
      route: "ledgers",
      icon: "description",
      isSelected: false,
      isDisabled: "unset",
      path: ["/ledgers"],
    },
    {
      text: "Settings",
      cols: 1,
      rows: 1,
      route: "settings",
      icon: "settings_applications",
      isSelected: false,
      isDisabled: "unset",
      path: ["/settings"],
    },
  ];
  private returnUrl = "/signin";
  public showFooterMenu: boolean = true;

  @ViewChild("commandbarSidenav", { static: true })
  public sidenav: MatSidenav;

  // public myWorkRoutes: SideNavRoute[];
  // public customerRoutes: SideNavRoute[];

  // public toolPaletteItems: ToolPaletteItem[];

  protected subscription: Subscription;
  public userInfo: any = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commandBarSidenavService: SidenavService,
    private dashboardService: MockDashboardService,
    private authService: AuthService,
    private configService: ConfigService,
    private translate: TranslateService,
    private toastr: ToastrService,
    private _dataStore: DataStore,
    private _toastReducer: ToastReducers,
    private spinner: NgxSpinnerService,
    private logger: LoggerService,
    private resetState: ResetStateReducers
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;

        console.log("Return url", this.returnUrl);

        this.menuLists = this.menuLists.map((data) => {
          if (data.path.includes(this.returnUrl)) {
            return { ...data, isSelected: true };
          } else return { ...data, isSelected: false };
        });

        this.showFooterMenu =
          route.root.firstChild.snapshot.data["showFooterMenu"] === undefined
            ? true
            : route.root.firstChild.snapshot.data["showFooterMenu"];
      }
    });
  }

  public ngOnInit(): void {
    this.logger.info("NavComponent: ngOnInit()");

    this._dataStore.dataStore$.subscribe((data) => {
      if (data.toast) {
        this.showToast(data.toastType, data.toastMessage, data.toastTitle);
        this._toastReducer.toastState({ type: HIDE_TOAST });
      }
      if (data.loader) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });

    this.commandBarSidenavService.setSidenav(this.sidenav);

    // this.loadNavListItems();

    // this.subscribe();
  }

  // async loadNavListItems() {
  // this.myWorkRoutes = await this.configService.get("my-work-routes");

  // this.myWorkRoutes.forEach(route => {
  //   this.translate.get(route.title).subscribe(value => {
  //     route.title = value;
  //   });
  // });

  // this.customerRoutes = await this.configService.get("customer-routes");

  // this.customerRoutes.forEach(route => {
  //   this.translate.get(route.title).subscribe(value => {
  //     route.title = value;
  //   });
  // });
  // }

  public getUserInfo(): any {
    if (this.authService.getUser()) this.userInfo = this.authService.getUser();

    return this.userInfo;
  }

  public showToast(type: string, message: string, title: string = null): void {
    const header: string = _.isEmpty(title) ? _.capitalize(type) : title;
    switch (type) {
      case "error":
        this.toastr.error(message, header);
        break;
      case "info":
        this.toastr.info(message, header);
        break;
      case "success":
        this.toastr.success(message, header);
        break;
      case "warning":
        this.toastr.warning(message, header);
        break;
    }
  }

  // protected subscribe() {
  //   this.logger.info("NavComponent: subscribe()");

  // this.subscription = this.dashboardService
  //   .getToolPaletteItems()
  //   .subscribe(data => {
  //     this.toolPaletteItems = data;
  //   });
  // }

  protected unsubscribe() {
    this.logger.info("DashboardComponent: unsubscribe()");

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  public onDragStart(event, identifier) {
    this.logger.info("NavComponent: onDragStart()");

    event.dataTransfer.setData("widgetIdentifier", identifier);

    event.dataTransfer.setData("text/plain", "Drag Me Button");
    event.dataTransfer.dropEffect = "move";
  }

  public logout() {
    // navigationSidenav.close()
    this.resetState.resetState({
      type: RESET_STATE,
    });
    localStorage.setItem("userExtraDetails", null);
    localStorage.setItem("userData", null);

    this.authService.logout("/signin");
  }

  public ngOnDestroy() {
    this.logger.info("NavComponent: ngOnDestroy()");

    this.unsubscribe();
  }
}

// https://github.com/tiberiuzuld/angular-gridster2/blob/master/src/app/sections/emptyCell/emptyCell.component.html
// https://github.com/tiberiuzuld/angular-gridster2/blob/master/src/app/sections/emptyCell/emptyCell.component.ts

// this.logger.info('toolPaletteItems: ' + JSON.stringify(this.toolPaletteItems));
