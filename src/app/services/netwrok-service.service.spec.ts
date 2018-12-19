import { TestBed } from '@angular/core/testing';

import { NetwrokServiceService } from './network-service.service';

describe('NetwrokServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetwrokServiceService = TestBed.get(NetwrokServiceService);
    expect(service).toBeTruthy();
  });
});
