import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeadhunterComponent } from './components/headhunter-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeadhunterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
