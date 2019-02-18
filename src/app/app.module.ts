import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ActualitePage} from "../pages/actualite/actualite";
import {HttpClientModule} from "@angular/common/http";
import {ActualiteDetailPage} from "../pages/actualite-detail/actualite-detail";
import { ModeleServiceProvider } from '../providers/modele-service/modele-service';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {IonicStorageModule} from "@ionic/storage";
import {PartenairePage} from "../pages/partenaire/partenaire";
import {ExposantPage} from "../pages/exposant/exposant";
import {ExposantDetailPage} from "../pages/exposant-detail/exposant-detail";
import {SponsorPage} from "../pages/sponsor/sponsor";
import {SponsorDetailPage} from "../pages/sponsor-detail/sponsor-detail";
import {GaleriePage} from "../pages/galerie/galerie";
import {PersonnagePage} from "../pages/personnage/personnage";
import {ExposantGaleriePage} from "../pages/exposant-galerie/exposant-galerie";
import {ProgrammePage} from "../pages/programme/programme";
import {SponsorGaleriePage} from "../pages/sponsor-galerie/sponsor-galerie";
import {ProgrammeDetailPage} from "../pages/programme-detail/programme-detail";
import {LancementPage} from "../pages/lancement/lancement";
import { YoutubeProvider } from '../providers/youtube/youtube';
import {PlaylistPage} from "../pages/playlist/playlist";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {VideoPage} from "../pages/video/video";
import {PersonnageGaleriePage} from "../pages/personnage-galerie/personnage-galerie";
import {RsePage} from "../pages/rse/rse";
import {RseDetailPage} from "../pages/rse-detail/rse-detail";
import {RseGaleriePage} from "../pages/rse-galerie/rse-galerie";
import {StreamingPage} from "../pages/streaming/streaming";
import {TemoignagePage} from "../pages/temoignage/temoignage";
import {Push} from "@ionic-native/push";
import { FcmProvider } from '../providers/fcm/fcm';

//import { FontAwnesomeModule } from '@fortawesome/angular-fontawesome';

const firebase = {

};

@NgModule({
  declarations: [
    MyApp,
    ActualitePage,
    ContactPage,
    HomePage,
    TabsPage,
    ActualiteDetailPage,
    PartenairePage,
    ExposantPage,
    ExposantDetailPage,
    SponsorPage,
    SponsorDetailPage,
    GaleriePage,
    PersonnagePage,
    ExposantGaleriePage,
    ProgrammePage,
    SponsorGaleriePage,
    ProgrammeDetailPage,
    LancementPage,
    PlaylistPage,
    VideoPage,
    PersonnageGaleriePage,
    RsePage,
    RseDetailPage,
    RseGaleriePage,
    StreamingPage,
    TemoignagePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActualitePage,
    ContactPage,
    HomePage,
    TabsPage,
    ActualiteDetailPage,
    PartenairePage,
    ExposantPage,
    ExposantDetailPage,
    SponsorPage,
    SponsorDetailPage,
    GaleriePage,
    PersonnagePage,
    ExposantGaleriePage,
    ProgrammePage,
    SponsorGaleriePage,
    ProgrammeDetailPage,
    LancementPage,
    PlaylistPage,
    VideoPage,
    PersonnageGaleriePage,
    RsePage,
    RseDetailPage,
    RseGaleriePage,
    StreamingPage,
    TemoignagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModeleServiceProvider,
    YoutubeProvider,
    YoutubeVideoPlayer,
    Push,
    FcmProvider
  ]
})
export class AppModule {}
