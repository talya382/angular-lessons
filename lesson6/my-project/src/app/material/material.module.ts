import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
// Layout & Navigation
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Data Display
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

// Popups & Modals
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MaterialComponents = [
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatButtonModule, MatIconModule, MatBadgeModule,
  MatProgressSpinnerModule, MatProgressBarModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatCheckboxModule, MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatSlideToggleModule,
  MatCardModule, MatTableModule, MatListModule,
  MatDividerModule, MatChipsModule,
  MatDialogModule, MatSnackBarModule, MatTooltipModule,
  FormsModule,  
  ReactiveFormsModule,
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents,
})
export class MaterialModule {}