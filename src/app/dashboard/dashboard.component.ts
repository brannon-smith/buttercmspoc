import { Component, OnInit } from '@angular/core';
import {ButterPage} from '../butterpage';
import {ButterPageService} from '../butter-page.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  butterPages: any = [];
  selectedButterPage: ButterPage;
  queryField: FormControl = new FormControl();
  constructor(private butterPageService: ButterPageService) {
   }

  ngOnInit() {
    this.listButterPages();

    this.queryField.valueChanges
    // .debounceTime(200)
    .pipe(debounceTime(1000))
    .subscribe(queryField => this.butterPageService.findButterPages(queryField)
    .subscribe((data: {}) => {
      this.butterPages = data;
    }));
  }

  listButterPages() {
    this.butterPageService.getButterPages()
      .subscribe((data: {}) => {
        this.butterPages = data;
      });
  }

  onSelect(butterPage: ButterPage): void {
    this.selectedButterPage = butterPage;
  }

}
