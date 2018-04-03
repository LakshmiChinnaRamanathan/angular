import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/Http"
@Injectable()
export class RemotecallService {

  constructor(private remotehttp:HttpClient) { }
  callremote(){
    console.log("Iam in service")
  }
  callRestData(){
    this.remotehttp.get("https://jsonplaceholder.typicode.com/users")
  }

}
