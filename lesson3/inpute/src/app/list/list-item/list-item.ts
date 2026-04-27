import { Component, input } from '@angular/core';
import { Item } from '../list';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.html',
})
export class ListItem {
  item = input.required<Item>();
}