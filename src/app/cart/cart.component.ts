import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartproducts:any []=[]
total:any=0;
user:any={};

paymentForm = new FormGroup({
fullname : new FormControl('',[Validators.required , Validators.minLength(3)]),
address : new FormControl('',[Validators.required , Validators.minLength(6)]),
creditcardnumber : new FormControl( '',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]),
});


  constructor(private cartService:CartService, private router:Router){}

ngOnInit(): void {
  this.getCarProducts();
}

getCarProducts(){
  if("cart" in localStorage){
    this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
  }
  this.Carttotalprice();
 }

 Carttotalprice(){
  this.total=0;
  for(let x in this.cartproducts){
    this.total += this.cartproducts[x].item.price * this.cartproducts[x].quantity;
  }
 }

 detectchange(){
  this.Carttotalprice();
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
 }

 inceaseProductAmount(index:number){
   this.cartproducts[index].quantity++;
   this.Carttotalprice();
   localStorage.setItem("cart",JSON.stringify(this.cartproducts))
 }

 deceaseProductAmount(index:number){
  this.cartproducts[index].quantity--;
  this.Carttotalprice();
  if(this.cartproducts[index].quantity < 1){
    this.deletproduct(index);
  }
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
 }
  


 deletproduct(index:number){
  this.cartproducts.splice(index , 1)
  this.Carttotalprice();
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  alert("Removed from card")
 }

 sumbit(){
  localStorage.setItem('cart_total', JSON.stringify(this.total))

  if(this.paymentForm.valid){
    this.user=Object.assign(this.user, this.paymentForm.value);
    this.cartService.addUser(this.user);
    this.paymentForm.reset();
    this.router.navigate(['/confirmation'])
  }
 
}
}
