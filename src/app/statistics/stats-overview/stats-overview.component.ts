import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats-overview',
  templateUrl: './stats-overview.component.html',
  styleUrls: ['./stats-overview.component.css']
})
export class StatsOverviewComponent implements OnInit {
  totalClients: number = 0;
  monthlyRevenue: number = 0;

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getActiveClientsCount().subscribe(count => this.totalClients = count);
    this.statsService.getEstimatedMonthlyRevenue().subscribe(revenue => this.monthlyRevenue = revenue);
  }
}
