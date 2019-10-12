import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMatselectComponent } from './test-matselect/test-matselect.component';

const routes: Routes = [
  { path: 'test-matselect', component: TestMatselectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
