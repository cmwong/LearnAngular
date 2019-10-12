import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestMatselectComponent } from './test-matselect/test-matselect.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TestMatselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
