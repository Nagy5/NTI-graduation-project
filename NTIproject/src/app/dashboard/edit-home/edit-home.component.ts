import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrl: './edit-home.component.css',
})
export class EditHomeComponent implements OnInit {
  homeForm: FormGroup;
  ID: string = '';

  constructor(private homeService: HomeService) {
    this.homeForm = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
    });
  }

  ngOnInit() {
    this.homeService.getHomeData().subscribe((data) => {
      if (data.length > 0) {
        const homeData = data[0];
        this.ID = homeData._id;
        this.homeForm.patchValue({
          title: homeData.title,
          subtitle: homeData.subtitle,
        });
      }
    });
  }

  saveInfo() {
    const updatedHomeData = {
      title: this.homeForm.get('title')?.value,
      subtitle: this.homeForm.get('subtitle')?.value,
    };

    this.homeService
      .updateHomeData(this.ID, updatedHomeData)
      .subscribe((data) => {
        console.log('Updated home data:', data);
      });
  }
}
