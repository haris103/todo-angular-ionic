import { TestBed } from '@angular/core/testing';

import { TodoapiService } from './todoapi.service';

describe('TodoapiService', () => {
  let service: TodoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
