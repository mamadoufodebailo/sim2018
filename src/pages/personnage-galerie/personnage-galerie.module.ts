import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonnageGaleriePage } from './personnage-galerie';

@NgModule({
  declarations: [
    PersonnageGaleriePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonnageGaleriePage),
  ],
})
export class PersonnageGaleriePageModule {}
