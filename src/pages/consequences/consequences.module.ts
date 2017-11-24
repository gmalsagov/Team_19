import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsequencesPage } from './consequences';

@NgModule({
  declarations: [
    ConsequencesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsequencesPage),
  ],
})
export class ConsequencesPageModule {}
