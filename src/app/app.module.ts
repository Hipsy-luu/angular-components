import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatetimerangepickerModule } from 'angular-datetimerangepicker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [  
    CommonModule,
    DatetimerangepickerModule, 
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
