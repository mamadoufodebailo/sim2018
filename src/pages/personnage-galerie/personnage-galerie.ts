import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {GalerieModele} from "../../modele/galerie.modele";

/**
 * Generated class for the PersonnageGaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personnage-galerie',
  templateUrl: 'personnage-galerie.html',
})
export class PersonnageGaleriePage {
  private galerie: any = {galeries : []};
  BANNIERE;
  private personnage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personnage = this.navParams.data.personne;

    let galery = this.personnage.galerie.galeries.photo;

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
