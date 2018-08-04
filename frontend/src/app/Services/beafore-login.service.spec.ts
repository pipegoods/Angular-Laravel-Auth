import { TestBed, inject } from '@angular/core/testing';

import { BeaforeLoginService } from './beafore-login.service';

describe('BeaforeLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaforeLoginService]
    });
  });

  it('should be created', inject([BeaforeLoginService], (service: BeaforeLoginService) => {
    expect(service).toBeTruthy();
  }));
});
