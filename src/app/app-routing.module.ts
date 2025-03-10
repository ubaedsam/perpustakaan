import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {
    path: 'homes', // Halaman Utama
    component: HomesComponent
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
