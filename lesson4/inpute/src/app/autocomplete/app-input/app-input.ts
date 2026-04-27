import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class AppInput {
  @Input({ required: true }) name!: string;
  @Output('search') onSearch = new EventEmitter<string>();
  
  searchValue: string = '';

  onInputChange() {
    this.onSearch.emit(this.searchValue);
  }
}