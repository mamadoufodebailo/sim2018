import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

import {Constant} from "../../modele/constant";
import {ExposantPage} from "../exposant/exposant";
import {SponsorPage} from "../sponsor/sponsor";
import {GaleriePage} from "../galerie/galerie";
import {ProgrammePage} from "../programme/programme";
import {LancementPage} from "../lancement/lancement";
import {VideoPage} from "../video/video";
import {RsePage} from "../rse/rse";
import {StreamingPage} from "../streaming/streaming";
import {TemoignagePage} from "../temoignage/temoignage";
import {PersonnagePage} from "../personnage/personnage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private FOND : any;
  private BANNIERE : any;

  public menus = [
    {'photo' : 'assets/imgs/galerie.jpg', 'nom' : 'le salon en images'},
    {'photo' : 'assets/imgs/video.jpg', 'nom' : 'videos'},
    {'photo' : 'assets/imgs/sponsor.jpg', 'nom' : 'sponsors'},
    {'photo' : 'assets/imgs/exposant.png', 'nom' : 'exposants'},
    {'photo' : 'assets/imgs/programme.png', 'nom' : 'programme'},
    {'photo' : 'assets/imgs/temoin.jpg', 'nom' : 'temoignages'},
    {'photo' : 'assets/imgs/rse.png', 'nom' : 'rse'},
    {'photo' : 'assets/imgs/lancement.jpg', 'nom' : 'lancement'},
  ];

  public person = [
    {'id':1,'fonction':'ministre','photo':'assets/imgs/ministre.jpg'},
    {'id':2,'fonction':'dppm','photo':'assets/imgs/dppm.png'},
    {'id':3,'fonction':'dmg','photo':'assets/imgs/dmg.png'},
    {'id':4,'fonction':'dcsom','photo':'assets/imgs/dcsom.png'},
    {'id':5,'fonction':'miferso','photo':'assets/imgs/miferso.JPG'}
  ];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.FOND = Constant.FOND;
    this.BANNIERE = Constant.BANNIERE;
  }

  goToPage(nom:any){
    switch (nom){
      case 'exposants' : this.navCtrl.push(ExposantPage);
        break;
      case 'sponsors' : this.navCtrl.push(SponsorPage);
        break;
      case 'le salon en images' : this.navCtrl.push(GaleriePage);
        break;
      case 'programme': this.navCtrl.push(ProgrammePage);
        break;
      case 'lancement': this.navCtrl.push(LancementPage);
        break;
      case 'videos': this.navCtrl.push(VideoPage);
        break;
      case 'rse': this.navCtrl.push(RsePage);
        break;
      case 'temoignages': this.navCtrl.push(TemoignagePage);
        break;
      default:this.navCtrl.setRoot(HomePage);
        break;
    }
  }

  openPerson(personne:any){
    this.navCtrl.push(PersonnagePage,{personne:personne});
  }

  openDirect(){
    this.navCtrl.push(StreamingPage);
  }

}
