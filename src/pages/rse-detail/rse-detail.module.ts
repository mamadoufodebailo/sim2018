import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RseDetailPage } from './rse-detail';

@NgModule({
  declarations: [
    RseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RseDetailPage),
  ],
})
export class RseDetailPageModule {}
