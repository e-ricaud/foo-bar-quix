import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Result} from '../../model/result';

@Injectable({
  providedIn: 'root',
})
export class FooBarQuixService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  convertNumber(numberToConvert: number): Observable<Result> {
    return this.httpClient.get<Result>(
      this.baseUrl + `/foo-bar-quix/${numberToConvert}`
    );
  }
}
