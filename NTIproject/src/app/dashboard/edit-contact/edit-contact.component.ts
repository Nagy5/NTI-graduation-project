import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent {
  contactForm: FormGroup;
  ID: string = '';

  constructor(private contactService: ContactService) {
    this.contactForm = new FormGroup({
      number: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe((data) => {
      if (data.length > 0) {
        const contactData = data[0];
        this.ID = contactData._id;
        this.contactForm.patchValue({
          title: contactData.title,
          subtitle: contactData.subtitle,
        });
      }
    });
  }

  saveInfo() {
    const updatedContactData = {
      number: this.contactForm.get('number')?.value,
      email: this.contactForm.get('email')?.value,
    };

    this.contactService
      .updateContact(this.ID, updatedContactData)
      .subscribe((data) => {
        console.log('Updated home data:', data);
      });
  }
}
