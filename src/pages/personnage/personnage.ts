import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Storage} from "@ionic/storage";
import {PersonnageModele} from "../../modele/personnage.modele";
import {PersonnageGaleriePage} from "../personnage-galerie/personnage-galerie";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the PersonnagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personnage',
  templateUrl: 'personnage.html',
})
export class PersonnagePage {
  private BANNIERE: string;
  private donnees: any;
  private personne: any;
  private personnage: PersonnageModele = new PersonnageModele();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modeleService: ModeleServiceProvider,public storage: Storage,
              public dom: DomSanitizer,private loadingCtrl: LoadingController) {
    this.personne = this.navParams.data.personne;
  }

  onSearch(){
    this.modeleService.getPersonnage(this.personne.id).subscribe(data=>{
      this.donnees = data;

      let personne = this.donnees.ministere;

      this.personnage.prenom = personne.prenom;
      this.personnage.nom = personne.nom;
      this.personnage.fonction = personne.fonction;
      this.personnage.description = personne.description;
      this.personnage.photo = personne.photo;
      this.personnage.galerie = personne.galerie.galeries;
      this.personnage.video = personne.video;

      this.storage.set('personnage',this.personnage);

    },error => {
      this.storage.get('personnage').then(personne=>{

        this.personnage.prenom = personne.prenom;
        this.personnage.nom = personne.nom;
        this.personnage.fonction = personne.fonction;
        this.personnage.description = personne.description;
        this.personnage.photo = personne.photo;
        this.personnage.galerie = personne.galerie;
        this.personnage.video = personne.video;
      })
    });
  }

  openGalerie(personnage:any){
    this.navCtrl.push(PersonnageGaleriePage,{personne: personnage});
  }

  isGalerie(photo){
    if (typeof photo !== 'undefined' && photo !== null) {
      if (photo.length >= 1){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
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

  sanitizeUrl(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
