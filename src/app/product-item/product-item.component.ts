import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit , OnDestroy{
  @Input()product!: Product;
  @Output() item = new EventEmitter();
  amount:number=0;

  constructor(private productsService:ProductsService){
 
  }
  ngOnInit(): void {
    
  }
  Addtocart(){
    if(this.amount>0){
       this.item.emit({item:this.product , quantity:this.amount})
    }
  
  }
 
  ngOnDestroy(): void {
   
  }
}
