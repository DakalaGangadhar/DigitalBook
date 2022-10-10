import { TestBed } from '@angular/core/testing';

import { ApiListService } from './api-list.service';

describe('ApiListService', () => {
  let service: ApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
