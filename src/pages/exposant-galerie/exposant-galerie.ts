import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {GalerieModele} from "../../modele/galerie.modele";

/**
 * Generated class for the ExposantGaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exposant-galerie',
  templateUrl: 'exposant-galerie.html',
})
export class ExposantGaleriePage {
  private galerie: any = {galeries : []};
  private exposant: any;
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exposant = this.navParams.data.exposant;

    let galery = this.exposant.galerie.galeries.photo;

    console.log(galery);

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
