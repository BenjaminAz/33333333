import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoViewPage } from './info-view.page';

const routes: Routes = [
  {
    path: '',
    component: InfoViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoViewPageRoutingModule {}
