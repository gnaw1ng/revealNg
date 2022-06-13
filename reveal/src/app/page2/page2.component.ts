import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})

export class Page2Component implements OnInit {
  per: Person;
  constructor() {
    this.per = new Person();
    this.per.name = '小明';
    this.per.age = 18;
   }

  ngOnInit() {
  }
  onClick() {
    alert('a client event');
  }
}

class Person {
  name: string;
  age: number;
}
