import { Component, OnInit, Input, Output, EventEmitter, enableProdMode, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../list/list.component';
enableProdMode();
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit , OnChanges {
   _person: Person;
  @Output() OnPersonClick = new EventEmitter<string>();

  @Input()
  set person(person: Person) {
      // person.profile += ' 出来混而已';
      this._person = person;
  }
  get person(): Person {
    return this._person;
  }
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const changedProp = changes[propName],
          from = JSON.stringify(changedProp.previousValue),
          to = JSON.stringify(changedProp.currentValue);
      console.log(`${propName} changed from ${from} to ${to}`);
    }
  }
  personClick(message: string) {
    this.OnPersonClick.emit(message);
  }
  handlefromParentClick() {
    alert(`${this._person.name} : 尊驾有何事`);
  }

}
