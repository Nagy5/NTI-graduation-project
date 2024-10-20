import { Component } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css',
})
export class AboutmeComponent {
  aboutData: any[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.getAboutData().subscribe({
      next: (data) => {
        this.aboutData = data;
        console.log('Home Data:', this.aboutData);
      },
      error: (error) => {
        console.error('Error fetching about data:', error);
      },
      complete: () => {
        console.log('Data fetching complete.');
      },
    });
  }
}
