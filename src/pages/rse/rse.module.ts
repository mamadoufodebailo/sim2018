import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RsePage } from './rse';

@NgModule({
  declarations: [
    RsePage,
  ],
  imports: [
    IonicPageModule.forChild(RsePage),
  ],
})
export class RsePageModule {}
