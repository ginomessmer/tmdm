import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsListPageComponent } from './downloads-list-page.component';

describe('DownloadsListPageComponent', () => {
  let component: DownloadsListPageComponent;
  let fixture: ComponentFixture<DownloadsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
