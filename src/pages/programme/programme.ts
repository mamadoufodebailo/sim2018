import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ProgrammeModele} from "../../modele/programme.modele";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {Storage} from "@ionic/storage";
import {ProgrammeDetailPage} from "../programme-detail/programme-detail";

/**
 * Generated class for the ProgrammePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programme',
  templateUrl: 'programme.html',
})
export class ProgrammePage {
  private programmes: any = {programmes:[]};
  private BANNIERE: string;
  private programme: ProgrammeModele = new ProgrammeModele();
  private donnees: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modele: ModeleServiceProvider,private storage: Storage) {

  }

  ionViewDidLoad() {
    this.BANNIERE = Constant.BANNIERE;
  }

  afficherProgramme(){
    this.modele.getProgrammes(this.programme.jour).subscribe(data=>{
      this.donnees = data;

      this.donnees.programmes.forEach(d=>{
        let prog = new ProgrammeModele();

        prog.titre = d.titre;
        prog.description = d.description;

        this.programmes.programmes.push(prog);
      });

      this.storage.set('programmes',this.programmes.programmes);
    },error =>{
      this.storage.get('programmes').then(programme=>{
        this.donnees = programme;

        this.donnees.forEach(program=>{
          let prog = new ProgrammeModele();

          prog.description = program.description;
          prog.titre = program.titre;

          this.programmes.programmes.push(prog);
        });
      })
    });
  }

  onDetail(programme:any){
    this.navCtrl.push(ProgrammeDetailPage,{programme:programme});
  }

}
