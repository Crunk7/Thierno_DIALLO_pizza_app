import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaDetailPage } from './pizza-detail';

@NgModule({
  declarations: [
    PizzaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaDetailPage),
  ],
})
export class PizzaDetailPageModule {}
