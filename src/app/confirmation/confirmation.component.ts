import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  users:any;
  carttotal:any;
  constructor(private cartService:CartService){}

  ngOnInit(): void {

    this.users=JSON.parse(localStorage.getItem("users") as any)||[];
   
    this.carttotal=JSON.parse(localStorage.getItem("cart_total") as any)||[];
     console.log(this.carttotal)
  }

 
}
