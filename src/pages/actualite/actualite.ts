import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ActualiteDetailPage} from "../actualite-detail/actualite-detail";
import {Storage} from "@ionic/storage";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Constant} from "../../modele/constant";
import {ActualiteModele} from "../../modele/ActualiteModele";

/**
 * Generated class for the ActualitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualite',
  templateUrl: 'actualite.html',
})
export class ActualitePage {
  private actus :any = {actualites: []};
  private page: number = 1;
  private donnees : any;
  private totalPages: number;
  private BANNIERE;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public storage: Storage,
              public modeleService: ModeleServiceProvider) {
  }

  onSearch(){
    this.modeleService.getActualites(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.actualites.forEach(d=> {
        let actualite = new ActualiteModele();

        actualite.titre = d.titre;
        actualite.contenu = d.contenu;
        actualite.photo = d.photo;
        actualite.date = d.date;

        this.actus.actualites.push(actualite);
      });

      this.storage.set("actualites",this.actus.actualites);
    },error=> {
      this.storage.get("actualites").then(actualites=> {
        this.donnees = actualites;

        this.donnees.forEach(actu=> {
          let actualite = new ActualiteModele();

          actualite.titre = actu.titre;
          actualite.date = actu.date;
          actualite.photo = actu.photo;
          actualite.contenu = actu.contenu;

          this.actus.actualites.push(actualite);
        });
      });
    });
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

  onDetail(actu){
    this.navCtrl.push(ActualiteDetailPage,{actualite: actu});
  }

}
