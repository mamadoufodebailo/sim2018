import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LancementPage } from './lancement';

@NgModule({
  declarations: [
    LancementPage,
  ],
  imports: [
    IonicPageModule.forChild(LancementPage),
  ],
})
export class LancementPageModule {}
