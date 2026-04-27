import { Component, signal } from '@angular/core';
import { Item } from './item/item';
import { Autocomplete } from './autocomplete/autocomplete';


@Component({
  selector: 'app-root',
  imports: [Autocomplete],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('inpute');
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
