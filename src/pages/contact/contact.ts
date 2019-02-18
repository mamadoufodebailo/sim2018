import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {ContactModele} from "../../modele/contact.modele";
import {Constant} from "../../modele/constant";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public contact: ContactModele= new ContactModele();
  private BANNIERE: string;
  private message: any;

  constructor(public navCtrl: NavController, public modele: ModeleServiceProvider) {
  }

  ionViewDidLoad(){
    this.BANNIERE = Constant.BANNIERE;
  }

  addContact(){
    this.modele.addContact(JSON.stringify(this.contact)).subscribe(data=> {
      console.log(data);
      this.message = data;
    },error => {
      console.error(error);
    });
  }

}
