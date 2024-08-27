import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { VendedoresListComponent } from './pages/vendedores-list/vendedores-list.component';

export const routes: Routes = [
    {path: 'form', component:FormComponent},
   {path: 'vendedores', component:VendedoresListComponent},
];
