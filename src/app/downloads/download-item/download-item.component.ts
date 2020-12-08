import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss']
})
export class DownloadItemComponent implements OnInit {

  @Input() item: chrome.downloads.DownloadItem;
  item$: Observable<chrome.downloads.DownloadItem>;
  thumbnailUrl: string;

  get fileTitle() {
    return this.item.filename.split('\\').pop();
  }

  get isCompleted() {
    return this.item.state == 'complete';
  }

  get isInProgress() {
    return this.item.state == 'in_progress';
  }

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    chrome.downloads.getFileIcon(this.item.id, iconUrl => {
      this.zone.run(() => this.thumbnailUrl = iconUrl);
    });

    this.item$ = new Observable<chrome.downloads.DownloadItem>(observer => {
      let interval = setInterval(() => chrome.downloads.search({ id: this.item.id }, res => {
        observer.next(res[0]);
      }), 500);
    });
  }

  openFile() {
    chrome.downloads.open(this.item.id);
  }

  openFolder() {
    chrome.downloads.show(this.item.id);
  }

}
