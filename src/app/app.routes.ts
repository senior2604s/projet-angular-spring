import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { AddSubscriptionComponent } from './subscriptions/add-subscription/add-subscription.component';
import { StatsOverviewComponent } from './statistics/stats-overview/stats-overview.component';
import { ExportSubscriptionsComponent } from './subscriptions/export-subscriptions/export-subscriptions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'clients/add', component: AddClientComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'offers', component: OffersListComponent },
  { path: 'offers/add', component: AddOfferComponent },
  { path: 'subscriptions/add', component: AddSubscriptionComponent },
  { path: 'statistics', component: StatsOverviewComponent },
  { path: 'subscriptions/export', component: ExportSubscriptionsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
