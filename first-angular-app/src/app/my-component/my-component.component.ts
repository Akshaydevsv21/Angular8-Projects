import { Component, OnInit } from '@angular/core';
import { myComponent } from './myComponent';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  component:myComponent={
    "id":200,
    "name":"Akshay"
  }
  constructor() { }

  ngOnInit() {
  }

}
