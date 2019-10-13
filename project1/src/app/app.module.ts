import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestMatselectComponent } from './test-matselect/test-matselect.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatListModule } from '@angular/material';
import { TestMatSelect1Component } from './test-mat-select1/test-mat-select1.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    TestMatselectComponent,
    TestMatSelect1Component,
    RxjsComponent
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
