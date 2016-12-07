import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {
  CognitoUtil,
  UserLoginService,
  UserParametersService,
  UserRegistrationService
} from "../providers/cognito.service";
import {AwsUtil} from "../providers/aws.service";
import {
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
  ConfirmRegistrationComponent,
  ResendCodeComponent,
  ForgotPasswordStep1Component,
  ForgotPasswordStep2Component
} from "../pages/auth/auth";
import {ControlPanelComponent} from "../pages/controlpanel/controlpanel";
import {TabsComponent} from "../pages/tabs/tabs";
import {IntroPage} from "../pages/intro/intro";
import {MapComponent} from "../components/map/map";
import {PickupComponent} from "../components/pickup/pickup";
import {Storage} from "@ionic/storage";
import {EventsService} from "../providers/events.service";

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmRegistrationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    ControlPanelComponent,
    TabsComponent,
    MapComponent,
    PickupComponent,
    IntroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmRegistrationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    ControlPanelComponent,
    TabsComponent,
    MapComponent,
    PickupComponent,
    IntroPage
  ],
  providers: [CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    Storage,
    EventsService]
})

export class AppModule {
}
