import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonnagePage } from './personnage';

@NgModule({
  declarations: [
    PersonnagePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonnagePage),
  ],
})
export class PersonnagePageModule {}
