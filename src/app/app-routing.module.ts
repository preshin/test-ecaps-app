import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//
// Auth libs
//

import { AuthGuard } from "auth";

// import { PlaceholderComponent } from "@app/core/components/placeholder/placeholder.component";
// import { PotComponent } from "@app/core/components/pot/pot.component";
// import { CreatePotComponent } from "@app/core/components/pot/createpot.component";
// import { ViewPotComponent } from "@app/core/components/pot/viewpot.component";
// import { TransferPotComponent } from "@app/core/components/pot/transferpot.component";
// import { BalanceComponent } from "@app/core/components/pot/balance.component";
// import { GoalComponent } from "@app/core/components/pot/goal.component";
// import { ClaimComponent } from "@app/core/components/claim/claim.component";
// import { NewClaimComponent } from "@app/core/components/claim/new-claim/newclaim.component";
// import { ClaimCongratsComponent } from "@app/core/components/claim/claim-congrats/claimcongrats.component";
// import { ClaimDetailsComponent } from "@app/core/components/claim/claim-details/claimdetails.component";
// import { SpendComponent } from "@app/core/components/spend/spend.component";
// import { SpendAnalyserComponent } from "@app/core/components/spend/spend-analyser/spendanalyser.component";
// import { SpendItemComponent } from "@app/core/components/spend/spend-item/spenditem.component";
// import { CardComponent } from "@app/core/components/card/card.component";
// import { ActivateCardComponent } from "@app/core/components/card/activate-card/activatecard.component";
// import { DeactivateCardComponent } from "@app/core/components/card/deactivate-card/deactivatecard.component";
// import { CardCongratsComponent } from "@app/core/components/card/card-congrats/cardcongrats.component";
// import { CardPinChangeComponent } from "@app/core/components/card/card-pin-change/cardpinchange.component";
// import { TransferFromToComponent } from "@app/core/components/pot/transferfromto.component";
// import { PotCongratsComponent } from "@app/core/components/pot/potcongrats.component";
// import { OtpComponent } from "@app/core/components/register/otp.component";
// import { LineOfCreditComponent } from "@app/core/components/line-of-credit/lineofcredit.component";
// import { TakeCreditComponent } from "@app/core/components/line-of-credit/take-credit/takecredit.component";
// import { LOCCreditConfirmComponent } from "@app/core/components/line-of-credit/loc-credit-confirm/loccreditconfirm.component";
// import { LocCongratsComponent } from "@app/core/components/line-of-credit/loc-congrats/loccongrats.component";
// import { LocFaqComponent } from "@app/core/components/line-of-credit/loc-faq/locfaq.component";
// import { LocRepayComponent } from "@app/core/components/line-of-credit/loc-repay/locrepay.component";
// import { MainLocComponent } from "@app/core/components/line-of-credit/main-loc/mainloc.component";

import { MyAccountComponent } from "@app/core/components/my-account/myaccount.component";
import { PaymentsComponent } from "@app/core/components/Payments/Payments.component";
import { SettingsComponent } from "@app/core/components/settings/settings.component";
import { LedgersComponent } from "@app/core/components/ledgers/ledgers.component";
import { EarningsLoyaltyComponent } from "@app/core/components/earnings-loyalty/earnings-loyalty.component";
import { MoneyTransferComponent } from "@app/core/components/money-transfer/money-transfer.component";
import { MobileRechargeComponent } from "@app/core/components/mobile-recharge/mobile-recharge.component";
import { DthRechargeComponent } from "@app/core/components/dth-recharge/dth-recharge.component";
import { LandlineBillComponent } from "@app/core/components/landline-bill/landline-bill.component";
import { DatacardRechargeComponent } from "@app/core/components/datacard-recharge/datacard-recharge.component";
import { HotelBookingComponent } from "@app/core/components/hotel-booking/hotel-booking.component";
import { LoanPayComponent } from "@app/core/components/loan-pay/loan-pay.component";
import { AepsComponent } from "@app/core/components/aeps/aeps.component";
import { SignInComponent } from "@app/core/components/login/sign-in/signin.component";
import { ForgotPasswordComponent } from "@app/core/components/login/forgot-password/forgotpassword.component";
import { TransactionsComponent } from "@app/core/components/transactions/transactions.component";
import { ViewTrasactionDetailsComponent } from "@app/core/components/transactions/view-transaction-details.component";
import { VerifyMoneyTransferComponent } from "@app/core/components/money-transfer/verify-money-transfer.component";


const routes: Routes = [
  //
  // https://angular.io/guide/lazy-loading-ngmodules#routes-at-the-app-level
  //

  // ng build --prod --source-map
  //
  // ERROR in ./src/app/app-routing.module.ts
  // Module not found: Error: Can't resolve './../../dist/sales/lib/sales.module.d.ngfactory' in
  //   '/Users/robferguson/workspace/Robinyo/koppr/src/app'

  // {
  //   path: 'sales',
  //   loadChildren: () => import('sales').then(lib => lib.SalesModule)
  // },

  //
  // Reference the lib wrapper modules using a relative path
  //

  {
        path: "forgot-password",
    component: ForgotPasswordComponent,
    data: {
      showFooterMenu: false,
      showBackButton: true
    }
    // canActivate: [AuthGuard],
    // runGuardsAndResolvers: "always"
  },
  {
        path: "signin",
    component: SignInComponent,
    data: {
      showHeaderNavBar: false,
      showFooterMenu: false
    }
    // canActivate: [AuthGuard],
    // runGuardsAndResolvers: "always"
  },
  {
        path: "myaccount",
    component: MyAccountComponent
  },
  {
        path: "payments",
    component: PaymentsComponent
  },
  {
        path: "settings",
    component: SettingsComponent
  },
  {
        path: "ledgers",
    component: LedgersComponent
  },
  {
        path: "earnings-loyalty",
    component: EarningsLoyaltyComponent
  },
  {
        path: "money-transfer",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
        
    component: MoneyTransferComponent
  },
  {
    path: "verify-money-transfer",
    data: {
        showBackButton: true,
        showFooterMenu: false
    },
    
    component: VerifyMoneyTransferComponent
  },
  {
        path: "money-transfer",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    
  component: MoneyTransferComponent
  },
  {
    path: "mobile-recharge",
    data: {
        showBackButton: true,
        showFooterMenu: false
    },

  component: MobileRechargeComponent
  },
  {
        path: "transactions",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: TransactionsComponent
  },
  {
    path: "transaction-details",
    data: {
        showBackButton: true,
        showFooterMenu: false
    },
    component: ViewTrasactionDetailsComponent
  },
  {
        path: "dth-recharge",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: DthRechargeComponent
  },
  {
        path: "landline-bill",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: LandlineBillComponent
  },
  {
        path: "datacard-bill",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: DatacardRechargeComponent
  },
  {
        path: "hotel-booking",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: HotelBookingComponent
  },
  {
        path: "loan-pay",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: LoanPayComponent
  },
  {
        path: "aeps",
        data: {
            showBackButton: true,
            showFooterMenu: false
        },
    component: AepsComponent
  },
  {
    path: "**",
    redirectTo: "signin"
  }
  // {
  //       path: "pots",
  //   component: PotComponent
  // },
  // {
  //       path: "potcongrats",
  //   component: PotCongratsComponent
  // },
  // {
  //       path: "otp",
  //   component: OtpComponent
  // },
  // {
  //       path: "create",
  //   component: CreatePotComponent
  // },
  // {
  //       path: "viewpot",
  //   component: ViewPotComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: 'always'
  // },
  // {
  //       path: "transfer",
  //   component: TransferPotComponent
  //   // ,
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: 'always'
  // },
  // {
  //       path: "transferfromto",
  //   component: TransferFromToComponent
  //   // ,
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: 'always'
  // },
  // {
  //       path: "balance",
  //   component: BalanceComponent,
  //   canActivate: [AuthGuard],
  //   runGuardsAndResolvers: "always"
  // },
  // {
  //       path: "goal",
  //   component: GoalComponent,
  //   canActivate: [AuthGuard],
  //   runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "claims",
  //   component: ClaimComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "new-claim",
  //   component: NewClaimComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "claim-congrats",
  //   component: ClaimCongratsComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "claim-details",
  //   component: ClaimDetailsComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "spends",
  //   component: SpendComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "spend-item",
  //   component: SpendItemComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "spend-analyser",
  //   component: SpendAnalyserComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "cards",
  //   component: CardComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "loc-first",
  //   component: LineOfCreditComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "take-credit",
  //   component: TakeCreditComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "credit-confirm",
  //   component: LOCCreditConfirmComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "loc-congrats",
  //   component: LocCongratsComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "loc-faq",
  //   component: LocFaqComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "loc-repay",
  //   component: LocRepayComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "loc",
  //   component: MainLocComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "activate-card",
  //   component: ActivateCardComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "deactivate-card",
  //   component: DeactivateCardComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "card-congrats",
  //   component: CardCongratsComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },

  // {
  //       path: "card-pin-change",
  //   component: CardPinChangeComponent
  //   // canActivate: [AuthGuard],
  //   // runGuardsAndResolvers: "always"
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// https://github.com/angular/angular/issues/10981

// https://github.com/tomastrajan/angular-lazy-lib-demo/blob/master/projects/some-app/src/app/app-routing.module.ts

// https://stackoverflow.com/questions/40380726/angular2-router-canactivate-after-logout

/*
{
  path: '',
  loadChildren: './lazy-loading/dashboard-widgets-lib-wrapper.module#DashboardWidgetsLibWrapperModule'
},
{
  path: '',
  loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule'
},
*/

/*

  {
    path: 'sales',
    children: [
      {
        path: '',
        loadChildren: './lazy-loading/flowable-lib-wrapper.module#FlowableLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/dashboard-widgets-lib-wrapper.module#DashboardWidgetsLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule'
      }
    ]
  },

*/

/*

      {
        path: '',
        loadChildren: './lazy-loading/highcharts-lib-wrapper.module#HighchartsLibWrapperModule'
      },

  {
    path: 'sales',
    children: [
      {
        path: '',
        loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/dashboard-widgets-lib-wrapper.module#DashboardWidgetsLibWrapperModule'
      },
      {
        path: '',
        loadChildren: './lazy-loading/dynamic-forms-lib-wrapper.module#DynamicFormsLibWrapperModule'
      }

    ]
  },

*/

/*

{
  path: 'sales',
  children: [
    {
      path: '',
      loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule'
    },
    {
      path: 'library-dashboard',
      loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule'
    },
    {
      path: 'library-dashboard-widgets',
      loadChildren: './lazy-loading/dashboard-widgets-lib-wrapper.module#DashboardWidgetsLibWrapperModule'
    },
    {
      path: 'library-dynamic-forms',
      loadChildren: './lazy-loading/dynamic-forms-lib-wrapper.module#DynamicFormsLibWrapperModule'
    }

  ]
},

{
  path: 'sales',
  loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule'
},

{
  path: 'sales',
  loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule',
  children: [
    {
      path: 'library-1',
      loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule'
    }
  ]
},

{
  // path: 'sales/leads',
  path: 'leads',
  component: PlaceholderComponent,
  canActivate: [AuthGuard],
  runGuardsAndResolvers: 'always'
},

{
  // path: 'sales/leads',
  path: 'leads',
  loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule',
  component: PlaceholderComponent,
  canActivate: [AuthGuard],
  runGuardsAndResolvers: 'always'
},

*/
