import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsListPageComponent } from './downloads-list-page/downloads-list-page.component';


@NgModule({
  declarations: [DownloadsListPageComponent],
  imports: [
    CommonModule,
    DownloadsRoutingModule
  ]
})
export class DownloadsModule { }
