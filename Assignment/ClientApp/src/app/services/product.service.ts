import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private url = 'https://localhost:5001/api/product';
  constructor(private http: HttpClient) {}

  public save(data: any): Observable<any> {
    debugger;
    return this.http.post(this.url + '/UploadFiles/', data);
  }

  public fetch(): Observable<any> {
    return this.http.get(this.url);
  }
}
