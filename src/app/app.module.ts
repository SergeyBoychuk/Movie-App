import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DataService } from './services/data.service';

import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MasonryModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
