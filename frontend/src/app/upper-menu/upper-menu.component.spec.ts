import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperMenuComponent } from './upper-menu.component';

describe('UpperMenuComponent', () => {
  let component: UpperMenuComponent;
  let fixture: ComponentFixture<UpperMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
