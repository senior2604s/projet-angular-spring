import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'offers', component: OffersListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
