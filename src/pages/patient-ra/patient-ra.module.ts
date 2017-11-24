import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientRaPage } from './patient-ra';

@NgModule({
  declarations: [
    PatientRaPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientRaPage),
  ],
})
export class PatientRaPageModule {}
