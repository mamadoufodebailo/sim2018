import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExposantGaleriePage } from './exposant-galerie';

@NgModule({
  declarations: [
    ExposantGaleriePage,
  ],
  imports: [
    IonicPageModule.forChild(ExposantGaleriePage),
  ],
})
export class ExposantGaleriePageModule {}
