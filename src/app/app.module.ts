import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importez RouterModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { AddSubscriptionComponent } from './subscriptions/add-subscription/add-subscription.component';
import { StatsOverviewComponent } from './statistics/stats-overview/stats-overview.component';
import { ExportSubscriptionsComponent } from './subscriptions/export-subscriptions/export-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    ClientsListComponent,
    OffersListComponent,
    AddClientComponent,
    ClientDetailsComponent,
    AddOfferComponent,
    AddSubscriptionComponent,
    StatsOverviewComponent,
    ExportSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // importer FormsModule
    HttpClientModule,
    RouterModule.forRoot([]) //  RouterModule est configuré correctement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
    