import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CausesPage } from '../pages/causes/causes';
import { ConsequencesPage } from '../pages/consequences/consequences';
import { PreventionPage } from '../pages/prevention/prevention';
import { HelpPage } from '../pages/help/help';
import { PatientRaPage } from '../pages/patient-ra/patient-ra';
import { CarerRaPage } from '../pages/carer-ra/carer-ra';
import { FireRaPage} from '../pages/fire-ra/fire-ra';
import { HealthRaPage} from '../pages/health-ra/health-ra';
import { ChecklistPage } from '../pages/checklist/checklist';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CausesPage,
    ConsequencesPage,
    PreventionPage,
    HelpPage,
    PatientRaPage,
    CarerRaPage,
    FireRaPage,
    HealthRaPage,
    ChecklistPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CausesPage,
    ConsequencesPage,
    PreventionPage,
    HelpPage,
    PatientRaPage,
    CarerRaPage,
    FireRaPage,
    HealthRaPage,
    ChecklistPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
