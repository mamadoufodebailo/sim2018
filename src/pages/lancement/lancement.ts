import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {PartenaireModele} from "../../modele/partenaire.modele";
import {LancementModele} from "../../modele/lancement.modele";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the LancementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancement',
  templateUrl: 'lancement.html',
})
export class LancementPage {
  private BANNIERE: string;
  private donnees: any;
  private lancement: any = {lancements:[]}

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modele: ModeleServiceProvider,private loadingCtrl: LoadingController,
              private storage: Storage) {
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
    this.modele.getLancement().subscribe(data=> {
      this.donnees =  data;

      this.donnees.lancements.forEach(d=>{
        let lancement = new LancementModele();
        lancement.photo = d.photo;
        lancement.titre = d.titre;

        this.lancement.lancements.push(lancement);
      })

      this.storage.set("lancements",this.lancement.lancements);
    },error=>{
      this.storage.get("lancements").then(start=>{
        this.donnees = start;

        this.donnees.forEach(lance=>{
          let lancement = new LancementModele();

          lancement.photo = lance.photo;
          lancement.titre = lance.titre;

          this.lancement.lancements.push(lancement);
        })
      });
    });
  }

}
