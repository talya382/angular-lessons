import { Routes } from '@angular/router';
import { ClothingListComponent } from './components/clothing-list/clothing-list';
import { ClothingSearchComponent } from './components/clothing-search/clothing-search';
import { ClothingDetailsComponent } from './components/clothing-details/clothing-details';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // ⬅️ עכשיו מפנה ל-login
  { path: 'login', component: LoginComponent },           // ⬅️ חדש!
  { path: 'list', component: ClothingListComponent },
  { path: 'search', component: ClothingSearchComponent },
  { path: 'details/:code', component: ClothingDetailsComponent },
  { path: '**', redirectTo: '/login' }                    // ⬅️ עכשיו מפנה ל-login
];