import { Component, input } from '@angular/core';
import { List, Item } from '../list/list';
import { AppInput } from './app-input/app-input';

@Component({
  selector: 'app-autocomplete',
  imports: [List, AppInput],
  templateUrl: './autocomplete.html',
})
export class Autocomplete {
  items = input.required<Item[]>();
}