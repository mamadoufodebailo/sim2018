import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {Storage} from "@ionic/storage";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {ExposantModele} from "../../modele/exposant.modele";
import {ExposantDetailPage} from "../exposant-detail/exposant-detail";
import {RseModele} from "../../modele/rseModele";
import {RseDetailPage} from "../rse-detail/rse-detail";

/**
 * Generated class for the RsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rse',
  templateUrl: 'rse.html',
})
export class RsePage {
  private BANNIERE: string;
  private rse : any = {rses: []};
  private page: number = 1;
  private donnees : any;
  private totalPages: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modele: ModeleServiceProvider,public storage: Storage,
              public loadingCtrl: LoadingController) {
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

  onSearch(){
    this.modele.getRse(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.rse.forEach(d=> {
        let rse = new RseModele();

        rse.nom = d.nom;
        rse.description = d.description;
        rse.reference = d.reference;
        rse.galerie = d.galerie;
        rse.url = d.url;
        rse.video = d.video;
        rse.photo = d.photo;

        this.rse.rses.push(rse);
      });

      this.storage.set("rses",this.rse.rses);
    },error=> {
      this.storage.get("rses").then(rses=> {
        this.donnees = rses;

        this.donnees.forEach(rs=> {
          let rse = new RseModele();

          rse.nom = rs.nom;
          rse.description = rs.description;
          rse.reference = rs.reference;
          rse.galerie = rs.galerie;
          rse.url = rs.url;
          rse.video = rs.video;
          rse.photo = rs.photo;

          this.rse.rses.push(rse);
        });
      });
    });
  }

  doInfinite(event){
    if (this.page < this.totalPages){
      ++this.page;
      this.onSearch();
      event.complete();
    }
  }

  onDetail(rse){
    this.navCtrl.push(RseDetailPage,{rse: rse});
  }

}
