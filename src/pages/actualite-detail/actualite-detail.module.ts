import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActualiteDetailPage } from './actualite-detail';

@NgModule({
  declarations: [
    ActualiteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActualiteDetailPage),
  ],
})
export class ActualiteDetailPageModule {}
