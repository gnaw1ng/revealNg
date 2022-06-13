import { Component, OnInit, ViewChild } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(ListItemComponent) listitem: ListItemComponent;
  pers: Array<Person>;
  constructor() {
    this.pers = this.getPersons();
  }

  ngOnInit() {
  }

  getPersons(): Array<Person> {
    const pers = new Array<Person>();
    pers.push(
    new Person('令狐冲', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 27, '剑在手,跟我走'),
    new Person('岳不群', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 47, '华山派'),
    new Person('东方不败', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 27, '日出东方,唯我不败'),
    new Person('林平之', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 22, '我的辟邪剑谱'),
    new Person('田不易', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 57, '剑在手,跟我走'));

    setTimeout(() => {
      pers[0] = new Person('走一个', '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 80, '吼啊');
    }, 5000);
    return pers;
  }
  handleClick($event) {
    alert(`${$event} : 叫某人有何事`);
  }
  clickChildFunction() {
    this.listitem.handlefromParentClick();
  }
}


export class Person {
  constructor(public name: string, public avatat: string, public age: number, public profile: string) {

  }
}
