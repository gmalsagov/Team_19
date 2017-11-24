import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PatientRaPage } from '../patient-ra/patient-ra';
import { CarerRaPage } from '../carer-ra/carer-ra';
import { FireRaPage} from '../fire-ra/fire-ra';
import { HealthRaPage} from '../health-ra/health-ra';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  goToPatientRaPage(){
    this.navCtrl.push(PatientRaPage);
  }

  goToCarerRaPage(){
    this.navCtrl.push(CarerRaPage);
  }

  goToFireRaPage(){
    this.navCtrl.push(FireRaPage);
  }

  goToHealthRaPage(){
    this.navCtrl.push(HealthRaPage);
  }

}
