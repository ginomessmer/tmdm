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
      limit: 30,
      orderBy: ['-startTime']
    };

    chrome.downloads.search(searchQuery, (items) => {
      console.log(items);

      this.zone.run(() => {
        this.downloadItems = items.filter(x => x.filename);
      });
    });
  }

  openDownloadsPage() {
    chrome.tabs.create({ url: 'chrome://downloads' });
  }
}
