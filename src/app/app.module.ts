import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButterPageComponent } from './butter-page/butter-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { SearchService } from './services/search.service';
import { from } from 'rxjs';
// import { SearchComponent } from './components/shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ButterPageComponent,
    SafeHtmlPipe,
    DashboardComponent,
    LoaderComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [LoaderService, SearchService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
