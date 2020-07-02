import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss']
})
export class DownloadItemComponent implements OnInit {

  @Input() item: chrome.downloads.DownloadItem;

  get fileTitle() {
    return this.item.filename.split('\\').pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
