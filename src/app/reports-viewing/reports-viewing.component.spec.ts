import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsViewingComponent } from './reports-viewing.component';

describe('ReportsViewingComponent', () => {
  let component: ReportsViewingComponent;
  let fixture: ComponentFixture<ReportsViewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsViewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
