import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { GrandfatherComponent } from './grandfather/grandfather.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TodoComponent } from './task/todo/todo.component';
import {FormsModule} from "@angular/forms";
import { ApiComponent } from './http/api/api.component';
import {RemotecallService} from "./remotecall.service";
import {} from ""
import {User} from "./user"

@NgModule({
  declarations: [
    AppComponent,
    GrandfatherComponent,
    ProductsComponent,
    CatalogueComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      {
        path:"catalogue",
        component:CatalogueComponent
      },
      {
        path:"products",
        component:ProductsComponent

      },
      {
        path:"todo",
        component:TodoComponent
      },
      {
        path:"remote",
        component:ApiComponent
      }
    ]),
  
    
    
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
