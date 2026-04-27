import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductReactiveFormComponent } from './components/product-reactive-form/product-reactive-form.component';
import { ProductFbFormComponent } from './components/product-fb-form/product-fb-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    ProductFormComponent,
    ProductReactiveFormComponent,
    ProductFbFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-project';
}