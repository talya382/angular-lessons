import { Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';

export class Item {
  title: string;
  id: string;

  constructor(title: string, id?: string) {
    this.title = title;
    this.id = id ?? crypto.randomUUID();
  }
}

@Component({
  selector: 'app-list',
  imports: [ListItem],
  templateUrl: './list.html',
})
export class List {
  items = input.required<Item[]>();
}