import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDataService } from './video-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VideoDataService]
})
export class AppModule { }
