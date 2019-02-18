import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {DomSanitizer} from "@angular/platform-browser";
import {Constant} from "../../modele/constant";
import {VideoModele} from "../../modele/video.modele";
import {TemoignageModele} from "../../modele/temoignage.modele";

/**
 * Generated class for the TemoignagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temoignage',
  templateUrl: 'temoignage.html',
})
export class TemoignagePage {
  private BANNIERE: any;
  private temoignages = [];
  private page: number = 1;
  private donnees : any;
  private totalPages: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modele: ModeleServiceProvider,public dom: DomSanitizer,
              public storage: Storage, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
    let loading = this.loadingCtrl.create({
      content: "Chargement des données..."
    });

    loading.present();

    this.onSearch();

    loading.dismiss();
  }

  doInfinite(event){
    if (this.page < this.totalPages){
      ++this.page;
      this.onSearch();
      event.complete();
    }
  }

  onSearch(){
    this.modele.getTemoignage(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.temoignages.forEach(d=> {
        let temoignage = new TemoignageModele();

        temoignage.message = d.message;
        temoignage.fonction = d.fonction;
        temoignage.groupe = d.groupe;
        temoignage.auteur = d.auteur;

        this.temoignages.push(temoignage);
      });

      this.storage.set("temoignages",this.temoignages);
    },error=> {
      this.storage.get("temoignages").then(temoignages=> {
        this.donnees = temoignages;

        this.donnees.forEach(temoin=> {
          let temoignage = new TemoignageModele();

          temoignage.message = temoin.message;
          temoignage.fonction = temoin.fonction;
          temoignage.groupe = temoin.groupe;
          temoignage.auteur = temoin.auteur;

          this.temoignages.push(temoignage);
        });
      });
    });
  }

}
