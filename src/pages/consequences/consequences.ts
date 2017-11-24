import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsequencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consequences',
  templateUrl: 'consequences.html',
})
export class ConsequencesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsequencesPage');
  }

  slides = [
    {
      title: "Physical Injury",
      description: "A paragraph on <b>medication</b> A paragraph on medication A paragraph on medication A paragraph on medication A paragraph on medication",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Loss of Confidence",
      description: "A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>A paragraph on <b>medication</b>",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Anxiety and Depression",
      description: "A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>A paragraph on <b>Lack of Fitness</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Loss of Independence",
      description: "A paragraph on <b>Eyes&Ears</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Inability to return home",
      description: "A paragraph on <b>Enviornment</b>",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
