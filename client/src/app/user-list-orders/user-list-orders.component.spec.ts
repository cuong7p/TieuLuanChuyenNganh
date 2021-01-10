import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListOrdersComponent } from './user-list-orders.component';

describe('UserListOrdersComponent', () => {
  let component: UserListOrdersComponent;
  let fixture: ComponentFixture<UserListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
