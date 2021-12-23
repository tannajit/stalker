import { TestBed } from '@angular/core/testing';

import { OnlineOfflineServiceService } from './online-offline-service.service';

describe('OnlineOfflineServiceService', () => {
  let service: OnlineOfflineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineOfflineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
