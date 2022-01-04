import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestsComponent } from './delete-requests.component';

describe('DeleteRequestsComponent', () => {
  let component: DeleteRequestsComponent;
  let fixture: ComponentFixture<DeleteRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
