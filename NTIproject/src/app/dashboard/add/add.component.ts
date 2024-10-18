import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  serviceForm: FormGroup;

   constructor(private fb: FormBuilder, private serviceService: ServiceService) {
    this.serviceForm = this.fb.group({
      serviceName: ['', Validators.required],
      serviceDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

submitForm(): void {
  if (this.serviceForm.valid) {
    const serviceData = {
      title: this.serviceForm.value.serviceName,
      description: this.serviceForm.value.serviceDescription
    };

    console.log('Form Submitted!', serviceData);
    this.serviceService.addService(serviceData).subscribe(
      response => {
        console.log('Service added successfully!', response);
        this.serviceForm.reset();
      },
      error => {
        console.error('Error adding service:', error);
      }
    );
  }
}


  get formStatus(): string {
    return this.serviceForm.valid ? 'valid' : 'invalid';
  }
}
