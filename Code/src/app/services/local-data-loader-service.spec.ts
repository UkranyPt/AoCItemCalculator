import { TestBed } from '@angular/core/testing';
import { LocalDataLoaderService } from './local-data-loader-service';

describe('LocalDataLoaderService', () => {
  let service: LocalDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
