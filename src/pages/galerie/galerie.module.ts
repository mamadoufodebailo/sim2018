import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GaleriePage } from './galerie';

@NgModule({
  declarations: [
    GaleriePage,
  ],
  imports: [
    IonicPageModule.forChild(GaleriePage),
  ],
})
export class GaleriePageModule {}
