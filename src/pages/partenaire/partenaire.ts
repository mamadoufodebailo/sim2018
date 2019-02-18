import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

import {Storage} from "@ionic/storage";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {PartenaireModele} from "../../modele/partenaire.modele";
import {Constant} from "../../modele/constant";

/**
 * Generated class for the PartenairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partenaire',
  templateUrl: 'partenaire.html',
})
export class PartenairePage {
  private donnees: any;
  private partenaire: any = {partenaires : []};
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
    this.modele.getPartenaires().subscribe(data=> {
      this.donnees =  data;

      this.donnees.partenaires.forEach(d=>{
        let partenaire = new PartenaireModele();
        partenaire.photo = d.photo;

        this.partenaire.partenaires.push(partenaire);
      });

      this.storage.set("partenaires",this.partenaire.partenaires);
    },error=>{
      this.storage.get("partenaires").then(partenaires=>{
        this.donnees = partenaires;

        this.donnees.forEach(partainer=>{
          let partenaire = new PartenaireModele();

          partenaire.photo = partainer.photo;

          this.partenaire.partenaires.push(partenaire);
        })
      });
    });
  }

}
