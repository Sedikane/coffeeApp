import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
valueOne: number;
name: string;
whippedcream: string;
quantity: number;
chocolate:String;
displat: number;
chocMessage: string;
whippedcreamMess: string;
chocPrice: number;
creamPrice: number;
display: number;
num: number;
numOfItems: number;
totAmount: number;

  constructor(public navCtrl: NavController) {
    this.num = 0;
   this.chocPrice = 12;
   this.creamPrice = 10;
  }
increClick() {
  this.num +=1;
  console.log(this.name);
}
decreClick() {
  this.num -=1;
}
reClick(){
  this.num = 0;
}
onClick(){
  this.display=1;
}
eventOne(){
  if(this.whippedcream){
    this.whippedcreamMess="+whippedcream";
  }
}
event(){
  if(this.chocolate){
    this.chocMessage="+chocolate";
  }
  
}
onClickFour(){
  this.num = 0;
  this.name = "";
  this.display = 0;
}
total(){
  this.totAmount = this.quantity*(this.chocPrice + this.creamPrice)
}

}
