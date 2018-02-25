import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// app.module.ts:
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Pizza} from '../../models/Pizza';

/*
  Generated class for the PizzaToServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class PizzaToServiceProvider {

  	private readonly url = "http://kim.jcatania.io:3000/pizza/";

  	constructor(private http: HttpClient) {
  		console.log("Hello PizzaToServiceProvider Provider");
  	}

/*  	sayHello(id: Number){
  		console.log("sayHello("+ id + ")")
  	}*/

  	get() {
  		let rt: Array<Pizza> = new Array<Pizza>();

  		return new Promise<Array<Pizza>>(resolve => {
  			this.http.get(this.url).subscribe((data:Array<any>) => {
  				for (let i =0; i<data.length; i++){
  					let pizza = new Pizza (data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price'], data[i]['ingredients']);
  				      rt.push(pizza);
  				}
          resolve(rt);
  			});
  		});
  	}

    getbyid(id: number){
      return new Promise(resolve => {
        this.http.get(this.url + id)
          .subscribe((data: Pizza) => {
            resolve(new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price'], data['ingredients']))
          });
      });
    }



  }
