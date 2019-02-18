import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExposantDetailPage } from './exposant-detail';

@NgModule({
  declarations: [
    ExposantDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExposantDetailPage),
  ],
})
export class ExposantDetailPageModule {}
