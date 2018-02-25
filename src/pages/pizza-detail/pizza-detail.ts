import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaToServiceProvider } from '../../providers/pizza_service/pizza_to_service';
import { Pizza } from '../../models/Pizza'
import { Ingredients } from '../../models/Ingredients'
import { ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the PizzaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-detail',
  templateUrl: 'pizza-detail.html',
})
export class PizzaDetailPage {
  detail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.detail = this.navParams.get("detail");
    console.log(this.detail);
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
