import { TestBed, inject } from '@angular/core/testing';

import { MessagesServicesService } from './messages-services.service';

describe('MessagesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesServicesService]
    });
  });

  it('should be created', inject([MessagesServicesService], (service: MessagesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
