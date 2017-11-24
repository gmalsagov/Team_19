import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreventionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevention',
  templateUrl: 'prevention.html',
})
export class PreventionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreventionPage');
  }

  slides = [
    {
      title: "Exercise",
      description: "A paragraph on <b>medication</b> A paragraph on medication A paragraph on medication A paragraph on medication A paragraph on medication",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Diet and Hydration",
      description: "A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Safety at Home and Outside",
      description: "A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Personal Care",
      description: "A paragraph on <b>Eyes&Ears</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Prevention Aids",
      description: "A paragraph on <b>Enviornment</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
