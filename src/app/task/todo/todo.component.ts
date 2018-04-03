import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasklist=["go to market","travel to bangalore"];
  sometask="add your task";

  constructor() { }

  ngOnInit() {
  }
  addTask=function(){
  console.log("adding task" +this.sometask);
  this.tasklist.push(this.sometask)
  console.log(this.tasklist);
  this.sometask="";
}
deletetask=function(ct){
  this.tasklist.splice(ct,1);
}

}
