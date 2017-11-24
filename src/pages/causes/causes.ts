import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CausesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-causes',
  templateUrl: 'causes.html',
})
export class CausesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CausesPage');
  }

  slides = [
    {
      title: "Medication",
      description: "A paragraph on <b>medication</b> A paragraph on medication A paragraph on medication A paragraph on medication A paragraph on medication",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Illness",
      description: "A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Lack of Fitness",
      description: "A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Eyes & Ears",
      description: "A paragraph on <b>Eyes&Ears</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Enviornment",
      description: "A paragraph on <b>Enviornment</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
