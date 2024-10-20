import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrl: './edit-about.component.css',
})
export class EditAboutComponent {
  aboutForm: FormGroup;
  ID: string = '';

  constructor(private aboutService: AboutService) {
    this.aboutForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
    this.aboutService.getAboutData().subscribe((data) => {
      if (data.length > 0) {
        const aboutData = data[0];
        this.ID = aboutData._id;
        this.aboutForm.patchValue({
          title: aboutData.title,
          subtitle: aboutData.subtitle,
        });
      }
    });
  }

  saveInfo() {
    const updatedAboutData = {
      title: this.aboutForm.get('title')?.value,
      description: this.aboutForm.get('description')?.value,
    };

    this.aboutService
      .updateAboutData(this.ID, updatedAboutData)
      .subscribe((data) => {
        console.log('Updated home data:', data);
      });
  }
}
