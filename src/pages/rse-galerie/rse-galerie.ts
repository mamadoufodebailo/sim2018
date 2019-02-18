import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {GalerieModele} from "../../modele/galerie.modele";

/**
 * Generated class for the RseGaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rse-galerie',
  templateUrl: 'rse-galerie.html',
})
export class RseGaleriePage {
  private galerie: any = {galeries : []};
  private rse: any;
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rse = this.navParams.data.rse;

    let galery = this.rse.galerie.galeries.photo;

    for (var i=0; i < galery.length; i++){
      let galerie = new GalerieModele();

      galerie.photo = galery[i];

      this.galerie.galeries.push(galerie);
    }

  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
