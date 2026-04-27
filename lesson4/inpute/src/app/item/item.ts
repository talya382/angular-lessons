import { Component } from '@angular/core';

Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  id: string;
  title: string;
  constructor(title: string, id?: string) {
    this.title = title;
    this.id = id ? id : crypto.randomUUID();
  }

}
