import { Component, Input, OnInit } from '@angular/core';
import { List } from '../list/list';
import { AppInput } from './app-input/app-input';
import { Item } from '../item/item';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [List, AppInput],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss'
})
export class Autocomplete implements OnInit {
  @Input({ required: true }) items!: Item[];
  @Input({ required: true }) inputName!: string;
  @Input() backgroundColor: string = '#f0f0f0';

  filteredItems: Item[] = [];

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  filterItems(searchText: string): void {
    this.filteredItems = this.items.filter(item => 
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}