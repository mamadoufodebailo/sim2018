import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";

/**
 * Generated class for the ActualiteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualite-detail',
  templateUrl: 'actualite-detail.html',
})
export class ActualiteDetailPage {
  private actualite: any;
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.actualite = this.navParams.data.actualite;
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
