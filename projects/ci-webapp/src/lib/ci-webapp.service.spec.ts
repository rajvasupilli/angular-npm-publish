import { TestBed } from '@angular/core/testing';

import { CiWebappService } from './ci-webapp.service';

describe('CiWebappService', () => {
  let service: CiWebappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiWebappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
