import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";

/**
 * Generated class for the ProgrammeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programme-detail',
  templateUrl: 'programme-detail.html',
})
export class ProgrammeDetailPage {
  private BANNIERE: string;
  private programme: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.programme = this.navParams.data.programme;
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

}
