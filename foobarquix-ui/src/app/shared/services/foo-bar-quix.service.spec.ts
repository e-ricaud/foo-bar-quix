import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { FooBarQuixService } from './foo-bar-quix.service';

describe('FooBarQuixService', () => {
  let httpMock: HttpTestingController;
  let service: FooBarQuixService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooBarQuixService],
      imports: [BrowserTransferStateModule, HttpClientTestingModule],
    });
    service = TestBed.inject(FooBarQuixService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get convertNumber', () => {
    service.convertNumber(3).subscribe();
    const request = httpMock.expectOne('http://localhost:8080/foo-bar-quix/3');
    expect(request.request.method).toEqual('GET');
    request.flush({});
  });
});
