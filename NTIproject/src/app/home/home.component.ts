import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeData: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData = data;
        console.log('Home Data:', this.homeData);
      },
      error: (error) => {
        console.error('Error fetching home data:', error);
      },
      complete: () => {
        console.log('Data fetching complete.');
      },
    });
  }
}
