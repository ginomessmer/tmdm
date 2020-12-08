import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadsListPageComponent } from './downloads-list-page/downloads-list-page.component';


const routes: Routes = [
  {
    path: '',
    component: DownloadsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsRoutingModule { }
