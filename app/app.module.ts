import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeadhuntersComponent } from './components/headhunters/headhunters.component';
import { HeadhunterDetailComponent } from './components/headhunter-detail/headhunter-detail.component';
import { HeadhunterService } from './services/headhunter.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeadhuntersComponent,
    HeadhunterDetailComponent
  ],
  providers: [ HeadhunterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
