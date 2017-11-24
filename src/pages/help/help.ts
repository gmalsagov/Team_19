import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  slides = [
    {
      title: "What to do if you fall",
      description: "A paragraph on <b>medication</b> A paragraph on medication A paragraph on medication A paragraph on medication A paragraph on medication",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Safe Home Checklist",
      description: "A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Local Support",
      description: "A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "National Support",
      description: "A paragraph on <b>Eyes&Ears</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Videos",
      description: "A paragraph on <b>Enviornment</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
