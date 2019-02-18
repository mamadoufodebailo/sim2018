import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ExposantGaleriePage} from "../exposant-galerie/exposant-galerie";
import {DomSanitizer} from "@angular/platform-browser";


/**
 * Generated class for the ExposantDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exposant-detail',
  templateUrl: 'exposant-detail.html',
})
export class ExposantDetailPage {
  private BANNIERE: string;
  private exposant: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dom: DomSanitizer) {
    this.exposant = this.navParams.data.exposant;
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  goToBack(){
    this.navCtrl.pop();
  }

  openGalerie(expo:any){
    this.navCtrl.push(ExposantGaleriePage,{exposant: expo});
  }

  isGalerie(photos){
    if (typeof photos !== 'undefined'){
      if (photos.length >= 1){
        return true;
      }
      else {
        return false;
      }
    }else {
      return false;
    }
  }

  sanitizeUrl(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
