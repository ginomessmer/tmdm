import { Component, OnInit, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss']
})
export class DownloadItemComponent implements OnInit {

  @Input() item: chrome.downloads.DownloadItem;
  thumbnailUrl: string;

  get fileTitle() {
    return this.item.filename.split('\\').pop();
  }

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    chrome.downloads.getFileIcon(this.item.id, iconUrl => {
      this.zone.run(() => this.thumbnailUrl = iconUrl);
    });
  }

}
