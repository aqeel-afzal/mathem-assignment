import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@mathem-assignment/mathem/shared/root/environments';
import { ApiEndpoints } from '@mathem-assignment/mathem/shared/types';
import { Observable } from 'rxjs';
import { DeliveryTimeEntity } from '../+state/delivery.models';

@Injectable({
  providedIn: 'root',
})
export class MathemDeliveryService {
  private api: ApiEndpoints;

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  getDates(): Observable<Array<string>> {
    const endpoint = `${this.api.baseUrl}/${this.api.endpoints.dates}`;
    return this.http.get<Array<string>>(endpoint);
  }

  getTimes(date: string): Observable<Array<DeliveryTimeEntity>> {
    const endpoint = `${this.api.baseUrl}/${this.api.endpoints.times}/${date}`;
    return this.http.get<Array<DeliveryTimeEntity>>(endpoint);
  }
}
