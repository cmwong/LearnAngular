import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMatselectComponent } from './test-matselect/test-matselect.component';
import { TestMatSelect1Component } from './test-mat-select1/test-mat-select1.component';

const routes: Routes = [
  { path: 'test-matselect', component: TestMatselectComponent },
  { path: 'test-matselect1', component: TestMatSelect1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
