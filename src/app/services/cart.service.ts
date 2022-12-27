import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartproducts:any[]=[]
  productlist=new BehaviorSubject<any>([]);
  users: any []=[]
  constructor() { }

  addToCart(product:any){
    if("cart" in localStorage){
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartproducts.find(item=>item.item.id==product.item.id)
      if(exist){
        alert("product is already in your cart")
      }else{
        this.cartproducts.push(product)
        localStorage.setItem("cart",JSON.stringify(this.cartproducts))
        alert("product added to your cart")
      }
     
    }else{
      this.cartproducts.push(product)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      alert("product added to your cart")
    }
  }

 addUser(user:any){
  let users = [];
  if (localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users')!);
    users = [user, ...users];
  } else{
    users = [user];
  }
  localStorage.setItem('users', JSON.stringify(users));
 }

}
