import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {SponsorGaleriePage} from "../sponsor-galerie/sponsor-galerie";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the SponsorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor-detail',
  templateUrl: 'sponsor-detail.html',
})
export class SponsorDetailPage {
  private BANNIERE: string;
  private sponsor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dom: DomSanitizer) {
    this.sponsor = this.navParams.data.sponsor;
  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  goToBack(){
    this.navCtrl.pop();
  }

  openGalerie(spon:any){
    this.navCtrl.push(SponsorGaleriePage,{sponsor: spon});
  }

  categorieColor(sponsor){
    if (sponsor.categorie === 'or')
      return 'yellow';
    else if (sponsor.categorie === 'argent')
      return 'green';
    else if (sponsor.categorie === 'bronze')
      return 'red';
    else
      return 'blue';
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
