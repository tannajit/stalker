import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractSelectComponent } from './extract-select.component';

describe('ExtractSelectComponent', () => {
  let component: ExtractSelectComponent;
  let fixture: ComponentFixture<ExtractSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
