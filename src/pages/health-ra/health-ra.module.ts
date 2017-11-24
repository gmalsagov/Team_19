import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthRaPage } from './health-ra';

@NgModule({
  declarations: [
    HealthRaPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthRaPage),
  ],
})
export class HealthRaPageModule {}
