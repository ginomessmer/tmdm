import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  templateUrl: './downloads-list-page.component.html',
  styleUrls: ['./downloads-list-page.component.scss']
})
export class DownloadsListPageComponent implements OnInit {

  public downloadItems: chrome.downloads.DownloadItem[] = [];

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
    chrome.downloads.search({}, items => {
      this.zone.run(() => {
        this.downloadItems = items;
      });
    });
  }

}
