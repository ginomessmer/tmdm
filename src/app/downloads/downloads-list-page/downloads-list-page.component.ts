import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  templateUrl: './downloads-list-page.component.html',
  styleUrls: ['./downloads-list-page.component.scss'],
})
export class DownloadsListPageComponent implements OnInit {
  public downloadItems: chrome.downloads.DownloadItem[] = [];
  searchTerm: string;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.search('');
  }

  search(term: string) {
    let searchQuery = {
      query: term.split(' '),
      orderBy: ['-startTime']
    };

    chrome.downloads.search(searchQuery, (items) => {
        this.zone.run(() => {
          this.downloadItems = items;
        });
      }
    );
  }
}
