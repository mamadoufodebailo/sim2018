import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GalerieModele} from "../../modele/galerie.modele";
import {Constant} from "../../modele/constant";

/**
 * Generated class for the SponsorGaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor-galerie',
  templateUrl: 'sponsor-galerie.html',
})
export class SponsorGaleriePage {
  private galerie: any = {galeries : []};
  private sponsor: any;
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sponsor = this.navParams.data.exposant;

    let galery = this.sponsor.galerie.galeries.photo;

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
