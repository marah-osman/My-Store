import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  routerSubscription!: Subscription;
  productSubscription!: Subscription ;
  product?: Product;
  productid:any;
  cartproducts:any[]=[]
  amount:number=0;
  
  constructor(private productService:ProductsService,private route:ActivatedRoute,private router:Router, private cartService:CartService){
   

  }
  
  ngOnInit(): void {
    this.routerSubscription=this.route.params.subscribe(params =>{
      this.productid= Number(params['id']);
      console.log(this.productid)

      this.productSubscription=this.productService.GetProductdetails(this.productid).subscribe(product =>{
        this.product=product;
      console.log(this.product)
      })
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }
 
  Addtocart(productId:any){
    this.productService.GetProductdetails(productId).subscribe(product =>{
      this.product=product;
       console.log(product)
       alert("product added to your cart")
      //  this.cartService.addToCart(product);
      // this.cartproducts.push(product)
      //   localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      //   alert("product added to your cart")
    })
  }
}
