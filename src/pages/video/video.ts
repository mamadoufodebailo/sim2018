import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Constant} from "../../modele/constant";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {DomSanitizer} from "@angular/platform-browser";
import {Storage} from "@ionic/storage";
import {VideoModele} from "../../modele/video.modele";

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  private BANNIERE: any;
  private videos = [];
  private page: number = 1;
  private donnees : any;
  private totalPages: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modele: ModeleServiceProvider,public dom: DomSanitizer,
              public storage: Storage, public loadingCtrl: LoadingController) {
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

  doInfinite(event){
    if (this.page < this.totalPages){
      ++this.page;
      this.onSearch();
      event.complete();
    }
  }

  onSearch(){
    this.modele.getVideo(this.page).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / 3);

      this.donnees.videos.forEach(d=> {
        let video = new VideoModele();

        video.titre = d.titre;
        video.jour = d.jour;
        video.url = d.url;

        this.videos.push(video);
      });

      this.storage.set("videos",this.videos);
    },error=> {
      this.storage.get("videos").then(videos=> {
        this.donnees = videos;

        this.donnees.forEach(media=> {
          let video = new VideoModele();

          video.titre = media.titre;
          video.jour = media.jour;
          video.url = media.url;

          this.videos.push(video);
        });
      });
    });
  }

  sanitizeUrl(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
