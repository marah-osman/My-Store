import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/models/posts';
import { Product } from 'src/models/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{
 
  products: Product[]=[];
  subscription: Subscription;
  cartproducts:any[]=[]

  constructor(private productsService:ProductsService , private cartService:CartService){
   this.productsService.GetProducts();
   this.subscription=this.productsService.products$.subscribe(products=>{
   this.products=products;
   console.log(products);
   });

  }
  ngOnInit(): void {
    
  }
  
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addtocart(event:any){
    
    this.cartService.addToCart(event);
    
   
  }

}
