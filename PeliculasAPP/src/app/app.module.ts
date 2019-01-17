import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
