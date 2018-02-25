import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaToServiceProvider } from '../../providers/pizza_service/pizza_to_service';
import { Pizza } from '../../models/Pizza'
import { Ingredients } from '../../models/Ingredients'
import { ModalController, ViewController } from 'ionic-angular';
import { PizzaDetailPage } from '../pizza-detail/pizza-detail';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listPizza: Array<Pizza> = new Array<Pizza>();
  listIngredients: Array<Ingredients> = new Array<Ingredients>();
  myPizza: Object = new Object();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public PizzaToServiceProvider: PizzaToServiceProvider) {
    };

  ngAfterViewInit () {
    this.PizzaToServiceProvider.get().then(data => {
      this.listPizza = data;
    });}
  
  getpizza (pizza: Pizza){    
    this.PizzaToServiceProvider.getbyid(pizza.id).then((data : Pizza) => {
      this.myPizza = data;
    })};

  presentPizzaModal(detail) {
    console.log("yo je suis là");    
    let pizzaModal = this.modalCtrl.create(PizzaDetailPage, { detail });
    pizzaModal.present();
  }
  }

