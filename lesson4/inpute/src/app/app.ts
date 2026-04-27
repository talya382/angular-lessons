import { Component } from '@angular/core';
import { Autocomplete } from './autocomplete/autocomplete';
import { Item } from './item/item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Autocomplete],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  colors: Item[] = [
    new Item('אדום'),
    new Item('כחול'),
    new Item('ירוק')
  ];

  countries: Item[] = [
    new Item('ישראל'),
    new Item('צרפת'),
    new Item('יפן')
  ];
}