import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { MatTooltipModule } from "@angular/material";
import { environment } from "@env/environment";
import { FormsModule } from "@angular/forms";
import { UtilsModule, LoggerService } from "utils";
import { AngularMaterialModule } from "utils";
import { DynamicFormsModule } from "dynamic-forms";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { NgOtpInputModule } from "ng-otp-input";
import { ChartsModule } from "ng2-charts";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

// import { PlaceholderComponent } from "./components/placeholder/placeholder.component";
// import { PotComponent } from "./components/pot/pot.component";
// import { CreatePotComponent } from "./components/pot/createpot.component";
// import { ViewPotComponent } from "./components/pot/viewpot.component";
// import { TransferPotComponent } from "./components/pot/transferpot.component";
// import { TransferFromToComponent } from "./components/pot/transferfromto.component";
// import { PotCongratsComponent } from "./components/pot/potcongrats.component";
// import { OtpComponent } from "./components/register/otp.component";
// import { BalanceComponent } from "./components/pot/balance.component";
// import { GoalComponent } from "./components/pot/goal.component";
// import { ClaimComponent } from "./components/claim/claim.component";
// import { NewClaimComponent } from "./components/claim/new-claim/newclaim.component";
// import { ClaimCongratsComponent } from "./components/claim/claim-congrats/claimcongrats.component";
// import { ClaimDetailsComponent } from "./components/claim/claim-details/claimdetails.component";
// import { SpendComponent } from "./components/spend/spend.component";
// import { SpendAnalyserComponent } from "./components/spend/spend-analyser/spendanalyser.component";
// import { SpendItemComponent } from "./components/spend/spend-item/spenditem.component";
// import { CardComponent } from "./components/card/card.component";
// import { ActivateCardComponent } from "./components/card/activate-card/activatecard.component";
// import { DeactivateCardComponent } from "./components/card/deactivate-card/deactivatecard.component";
// import { CardCongratsComponent } from "./components/card/card-congrats/cardcongrats.component";
// import { CardPinChangeComponent } from "./components/card/card-pin-change/cardpinchange.component";
// import { LineOfCreditComponent } from "./components/line-of-credit/lineofcredit.component";
// import { TakeCreditComponent } from "./components/line-of-credit/take-credit/takecredit.component";
// import { LOCCreditConfirmComponent } from "./components/line-of-credit/loc-credit-confirm/loccreditconfirm.component";
// import { LocCongratsComponent } from "./components/line-of-credit/loc-congrats/loccongrats.component";
// import { LocFaqComponent } from "./components/line-of-credit/loc-faq/locfaq.component";
// import { LocRepayComponent } from "./components/line-of-credit/loc-repay/locrepay.component";
// import { MainLocComponent } from "./components/line-of-credit/main-loc/mainloc.component";


//
// koppr Components lib
//

import { kopprComponentsModule } from "koppr-components";
 

import { CustomToast } from "./components/custom-toast/customtoast.component";
import { SignInComponent } from "./components/login/sign-in/signin.component";
import { MyAccountComponent } from "./components/my-account/myaccount.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { NavComponent } from "./components/nav/nav.component";
import { PaymentsComponent } from "./components/Payments/Payments.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { LedgersComponent } from "./components/ledgers/ledgers.component";
import { EarningsLoyaltyComponent } from "./components/earnings-loyalty/earnings-loyalty.component";
import { MoneyTransferComponent } from "./components/money-transfer/money-transfer.component";
import { MobileRechargeComponent } from "./components/mobile-recharge/mobile-recharge.component";
import { DthRechargeComponent } from "./components/dth-recharge/dth-recharge.component";
import { LandlineBillComponent } from "./components/landline-bill/landline-bill.component";
import { DatacardRechargeComponent } from "./components/datacard-recharge/datacard-recharge.component";
import { HotelBookingComponent } from "./components/hotel-booking/hotel-booking.component";
import { LoanPayComponent } from "./components/loan-pay/loan-pay.component";
import { AepsComponent } from "./components/aeps/aeps.component";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgotpassword.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { ViewTrasactionDetailsComponent } from "./components/transactions/view-transaction-details.component";
import { VerifyMoneyTransferComponent } from "./components/money-transfer/verify-money-transfer.component";

@NgModule({
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    // The Angular Material module must be imported after Angular's BrowserModule, as the import order matters for NgModules.
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    kopprComponentsModule,
    ReactiveFormsModule,
    DynamicFormsModule,
    DynamicFormsMaterialUIModule,
    NgOtpInputModule,
    ChartsModule,
    MatTooltipModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      // progressBar: true,
      progressBar: false,
      closeButton: true,
      // positionClass: "toast-top-full-width",
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
      // toastComponent: CustomToast,
      // toastClass: "custom-toast",
      // messageClass: "custom-toast-message",
      // titleClass: "custom-toast-title"
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    UtilsModule.forRoot(environment),

    RouterModule, // There is no directive with "exportAs" set to "routerLinkActive ...
  ],
  entryComponents: [CustomToast],
  declarations: [
    // PlaceholderComponent,
    // PotComponent,
    // CreatePotComponent,
    // TransferPotComponent,
    // TransferFromToComponent,
    // PotCongratsComponent,
    // BalanceComponent,
    // GoalComponent,
    // SpendComponent,
    // SpendAnalyserComponent,
    // SpendItemComponent,
    // CardComponent,
    // ActivateCardComponent,
    // DeactivateCardComponent,
    // CardCongratsComponent,
    // CardPinChangeComponent,
    // ClaimComponent,
    // NewClaimComponent,
    // ClaimCongratsComponent,
    // ClaimDetailsComponent,
    // ViewPotComponent,
    // OtpComponent,
    // LineOfCreditComponent,
    // TakeCreditComponent,
    // LOCCreditConfirmComponent,
    // LocCongratsComponent,
    // LocFaqComponent,
    // LocRepayComponent,
    // MainLocComponent,
    NavigationBarComponent,
    NavComponent,
    MyAccountComponent,
    PaymentsComponent,
    SettingsComponent,
    LedgersComponent,
    EarningsLoyaltyComponent,
    MoneyTransferComponent,
    MobileRechargeComponent,
    DthRechargeComponent,
    LandlineBillComponent,
    DatacardRechargeComponent,
    HotelBookingComponent,
    LoanPayComponent,
    AepsComponent,
    SignInComponent,
    CustomToast,
    ForgotPasswordComponent,
    TransactionsComponent,
    ViewTrasactionDetailsComponent,
    VerifyMoneyTransferComponent
  ],
  exports: [
    // PlaceholderComponent,
    // PotComponent,
    // CreatePotComponent,
    // TransferPotComponent,
    // TransferFromToComponent,
    // PotCongratsComponent,
    // BalanceComponent,
    // GoalComponent,
    // SpendComponent,
    // SpendAnalyserComponent,
    // SpendItemComponent,
    // CardComponent,
    // ActivateCardComponent,
    // DeactivateCardComponent,
    // CardCongratsComponent,
    // CardPinChangeComponent,
    // ClaimComponent,
    // NewClaimComponent,
    // ClaimCongratsComponent,
    // ClaimDetailsComponent,
    // ViewPotComponent,
    // OtpComponent,
    // LineOfCreditComponent,
    // TakeCreditComponent,
    // LOCCreditConfirmComponent,
    // LocCongratsComponent,
    // LocFaqComponent,
    // LocRepayComponent,
    // MainLocComponent,
    NavigationBarComponent,
    NavComponent,
    MyAccountComponent,
    PaymentsComponent,
    SettingsComponent,
    LedgersComponent,
    EarningsLoyaltyComponent,
    MoneyTransferComponent,
    MobileRechargeComponent,
    DthRechargeComponent,
    LandlineBillComponent,
    DatacardRechargeComponent,
    HotelBookingComponent,
    LoanPayComponent,
    AepsComponent,
    SignInComponent,
    CustomToast,
    ForgotPasswordComponent,
    TransactionsComponent,
    ViewTrasactionDetailsComponent,
    VerifyMoneyTransferComponent
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private translate: TranslateService,
    private logger: LoggerService
  ) {
    this.logger.info("Core Module initialised");

    // 'en-gb' -> 'en'
    const defaultLanguage = environment.defaultLanguage.split("-")[0];

    this.logger.info("Default Language: " + defaultLanguage);
    this.logger.info("Local: " + environment.defaultLanguage.split("-")[1]);

    translate.setDefaultLang(defaultLanguage);
    translate.use(defaultLanguage);

    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// https://stackoverflow.com/questions/50860898/angular-6-services-providedin-root-vs-coremodule

// https://github.com/angular/angular/issues/29848 -> Keep CoreModule as preferred location for app-wide single-use components

//
// Firebase Hosting
//

// https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md

// import { AngularFireModule } from '@angular/fire';
