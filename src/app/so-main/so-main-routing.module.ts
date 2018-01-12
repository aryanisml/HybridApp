import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoMainComponent } from './so-main.component';

const routes: Routes = [
  { path: 'somainapp', component: SoMainComponent },
    { path: '', component: SoMainComponent },
      {path: '**', component: SoMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class SoMainRouting { }

