import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsListPageComponent } from './downloads-list-page/downloads-list-page.component';
import { DownloadItemComponent } from './download-item/download-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DownloadsListPageComponent, DownloadItemComponent],
  imports: [
    CommonModule,
    DownloadsRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class DownloadsModule { }
