import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser'
import {Constant} from "../../modele/constant";
import {RseGaleriePage} from "../rse-galerie/rse-galerie";

/**
 * Generated class for the RseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rse-detail',
  templateUrl: 'rse-detail.html',
})
export class RseDetailPage {
  private BANNIERE: string;
  private rse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dom: DomSanitizer) {
    this.rse = this.navParams.data.rse;
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  goToBack(){
    this.navCtrl.pop();
  }

  openGalerie(rse:any){
    this.navCtrl.push(RseGaleriePage,{rse: rse});
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
