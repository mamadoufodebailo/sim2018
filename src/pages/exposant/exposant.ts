import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Constant} from "../../modele/constant";
import {ActualiteDetailPage} from "../actualite-detail/actualite-detail";
import {ActualiteModele} from "../../modele/ActualiteModele";
import {ExposantModele} from "../../modele/exposant.modele";
import {Storage} from "@ionic/storage";
import {ExposantDetailPage} from "../exposant-detail/exposant-detail";

/**
 * Generated class for the ExposantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exposant',
  templateUrl: 'exposant.html',
})
export class ExposantPage {
  private expos :any = {exposants: []};
  private page: number = 1;
  private donnees : any;
  private totalPages: number;
  private BANNIERE:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modele: ModeleServiceProvider,public storage: Storage,
              public loadingCtrl: LoadingController) {
  }

  onSearch(){
    this.modele.getExposants(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.exposants.forEach(d=> {
        let exposant = new ExposantModele();

        exposant.nom = d.nom;
        exposant.description = d.description;
        exposant.categorie = d.categorie;
        exposant.reference = d.reference;
        exposant.galerie = d.galerie;
        exposant.url = d.url;
        exposant.video = d.video;
        exposant.photo = d.photo;

        this.expos.exposants.push(exposant);
      });

      this.storage.set("exposants",this.expos.exposants);
    },error=> {
      this.storage.get("exposants").then(exposants=> {
        this.donnees = exposants;

        this.donnees.forEach(expo=> {
          let exposant = new ExposantModele();

          exposant.nom = expo.nom;
          exposant.description = expo.description;
          exposant.categorie = expo.categorie;
          exposant.reference = expo.reference;
          exposant.galerie = expo.galerie;
          exposant.url = expo.url;
          exposant.video = expo.video;
          exposant.photo = expo.photo;

          this.expos.exposants.push(exposant);
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
      console.log(this.page);
      this.onSearch();
      event.complete();
    }
  }

  onDetail(expo){
    this.navCtrl.push(ExposantDetailPage,{exposant: expo});
  }

}
