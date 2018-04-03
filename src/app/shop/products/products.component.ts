import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products=["shoe","snacks","socks","dress","diamond","phone"]
  constructor() { }

  ngOnInit() {
  }
  giftme=function(counter){
    console.log("buy me this!!!!!!!" +this.products[counter]);
  }

}
