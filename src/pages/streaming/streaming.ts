import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Constant} from "../../modele/constant";

/**
 * Generated class for the StreamingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-streaming',
  templateUrl: 'streaming.html',
})
export class StreamingPage {
  private BANNIERE: any;
  private donnees: any;
  private video: any;
  private message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dom: DomSanitizer,public modele: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;

    this.modele.getLive().subscribe(data=>{
      this.donnees = data;

      this.video = this.sanitizeUrl(this.donnees.stream.direct);
    },error=>{
      this.message = "Impossible de lire la vidéo en ligne !";
    });
  }

  sanitizeUrl(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
