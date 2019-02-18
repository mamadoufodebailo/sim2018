import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Storage} from "@ionic/storage";
import {GalerieModele} from "../../modele/galerie.modele";
import {Constant} from "../../modele/constant";

/**
 * Generated class for the GaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galerie',
  templateUrl: 'galerie.html',
})
export class GaleriePage {
  private donnees: any;
  private galeries: any = {galeries : []};
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public storage: Storage,
              public modele: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
    let loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });

    loading.present();

    this.onSearch();

    loading.dismiss();
  }

  onSearch(){
    this.modele.getGalerie().subscribe(data=> {
      this.donnees =  data;

      this.donnees.galeries.forEach(d=>{
        let galerie = new GalerieModele();
        galerie.photo = d.photo;

        this.galeries.galeries.push(galerie);
      })

      this.storage.set("galeries",this.galeries.galeries);
    },error=>{
      this.storage.get("galeries").then(galeries=>{
        this.donnees = galeries;

        this.donnees.forEach(galery=>{
          let galerie = new GalerieModele();

          galerie.photo = galery.photo;

          this.galeries.galeries.push(galerie);
        })
      });
    });
  }

}
