import { Component } from '@angular/core';

@Component({
  selector: 'app-lakshmi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wonderful girl lakshmi';
  name='ram';
  num1=10;
  num2=100;

  displayDate = function()
{
  return new Date();
}

}
