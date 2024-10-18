

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css'],
})
export class MyServiceComponent implements OnInit {
  isLoggedIn = false;
  services: any[] = [];

   constructor(private authService: AuthService, private serviceService: ServiceService) {

    this.authService.getToken().subscribe((token) => {
      this.isLoggedIn = !!token;
    });
  }

  ngOnInit() {
    this.fetchServices();
  }

   fetchServices() {
    this.serviceService.getAllServices().subscribe(
      (response) => {
        this.services = response;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }
  deleteService(serviceId: string) {

    if (this.isLoggedIn) {
      this.serviceService.deleteService(serviceId).subscribe(
        (response) => {
          console.log('Service deleted', response);
          this.fetchServices();
        },
        (error) => {
          console.error('Error deleting service:', error);
        }
      );
    }
  }
}
