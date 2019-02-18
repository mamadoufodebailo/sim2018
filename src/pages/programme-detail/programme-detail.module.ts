import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgrammeDetailPage } from './programme-detail';

@NgModule({
  declarations: [
    ProgrammeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgrammeDetailPage),
  ],
})
export class ProgrammeDetailPageModule {}
