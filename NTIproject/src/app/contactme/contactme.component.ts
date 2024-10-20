import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css',
})
export class ContactmeComponent {
  contactData: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe({
      next: (data) => {
        this.contactData = data;
        console.log('Home Data:', this.contactData);
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
