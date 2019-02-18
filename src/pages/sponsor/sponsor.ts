import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Storage} from "@ionic/storage";
import {SponsorModele} from "../../modele/sponsor.modele";
import {SponsorDetailPage} from "../sponsor-detail/sponsor-detail";

/**
 * Generated class for the SponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html',
})
export class SponsorPage {
  private sponsors :any = {sponsors: []};
  private page: number = 1;
  private donnees : any;
  private totalPages: number;
  private BANNIERE: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modele: ModeleServiceProvider,public storage: Storage,
              public loadingCtrl: LoadingController) {
  }

  onSearch(){
    this.modele.getSponsors(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.sponsors.forEach(d=> {
        let sponsor = new SponsorModele();

        sponsor.nom = d.nom;
        sponsor.description = d.description;
        sponsor.categorie = d.categorie;
        sponsor.reference = d.reference;
        sponsor.galerie = d.galerie;
        sponsor.url = d.url;
        sponsor.video = d.video;
        sponsor.photo = d.photo;

        this.sponsors.sponsors.push(sponsor);
      });

      this.storage.set("sponsors",this.sponsors.exposants);
    },error=> {
      this.storage.get("sponsors").then(sponsors=> {
        this.donnees = sponsors;

        this.donnees.forEach(sponso=> {
          let sponsor = new SponsorModele();

          sponsor.nom = sponso.nom;
          sponsor.description = sponso.description;
          sponsor.categorie = sponso.categorie;
          sponsor.reference = sponso.reference;
          sponsor.galerie = sponso.galerie;
          sponsor.url = sponso.url;
          sponsor.video = sponso.video;
          sponsor.photo = sponso.photo;

          this.sponsors.sponsors.push(sponsor);
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

  onDetail(sponsor){
    this.navCtrl.push(SponsorDetailPage,{sponsor: sponsor});
  }

}
