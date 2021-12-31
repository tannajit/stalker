import { TestBed } from '@angular/core/testing';

import { VideoRecordingService } from './video-recording.service';

describe('VideoRecordingService', () => {
  let service: VideoRecordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoRecordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
