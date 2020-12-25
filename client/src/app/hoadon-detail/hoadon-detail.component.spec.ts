import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonDetailComponent } from './hoadon-detail.component';

describe('HoadonDetailComponent', () => {
  let component: HoadonDetailComponent;
  let fixture: ComponentFixture<HoadonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoadonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
