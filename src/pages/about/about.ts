import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CausesPage } from '../causes/causes';
import { ConsequencesPage } from '../consequences/consequences';
import { PreventionPage } from '../prevention/prevention';
import { HelpPage } from '../help/help';
import { ChecklistPage } from '../checklist/checklist'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToCausesPage(){
    this.navCtrl.push(CausesPage);
  }

  goToConsequencesPage(){
    this.navCtrl.push(ConsequencesPage);
  }

  goToPreventionPage(){
    this.navCtrl.push(PreventionPage);
  }

  goToHelpPage(){
    this.navCtrl.push(HelpPage);
  }
  goToChecklistPage(){
    this.navCtrl.push(ChecklistPage);
  }

}
