import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {ButterPage} from '../butterpage';
import {ButterPageService} from '../butter-page.service';
import { SafeHtmlPipe } from '../safe-html.pipe';

@Component({
  selector: 'app-butter-page',
  templateUrl: './butter-page.component.html',
  styleUrls: ['./butter-page.component.css']
})
export class ButterPageComponent implements OnInit {

butterPage: ButterPage = {
  slug: '',
  testShortText: '',
  testLongText: '',
  testWysiwyg: '',
  category: ''
};
isLoadingResults = true;

   constructor(private route: ActivatedRoute, private butterPageService: ButterPageService, private location: Location) {
   }

  ngOnInit() {
    this.getButterPage();
  }

  getButterPage(): void {
    const id = this.route.snapshot.paramMap.get('slug');
    this.butterPageService.getButterPage(id)
    .subscribe(data => {
      this.butterPage = data;
      this.isLoadingResults = false;
    });
  }

  getbutterPage(id) {
    this.butterPageService.getButterPage(id)
      .subscribe(data => {
        this.butterPage = data;
        this.isLoadingResults = false;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
