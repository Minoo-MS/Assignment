import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private url = 'http://localhost:5001/api/product';
  constructor(private http: HttpClient) {}

   upload(data: any) {
    debugger;
    var formData = new FormData();
    formData.append('file', data);
   return this.http.post(this.url + '/UploadFiles/', formData);
  }

   fetch(): Observable<any> {
    return this.http.get(this.url);
  }
}
