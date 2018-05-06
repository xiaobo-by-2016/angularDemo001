import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
@Injectable()
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': ' application/x-www-form-urlencoded'
    })
  };

  private baseUrl = 'http://127.0.0.1:3000/';


  constructor(private http: HttpClient) { }


  //post请求
  doPost(params: any, url): Observable<any> {
    let urlSearchParams = new URLSearchParams()
    for (let keyStr in params) {
      urlSearchParams.append(keyStr, params[keyStr]);
    }
    let param = urlSearchParams.toString()
    return this.http.post<any>(this.baseUrl + url, param, this.httpOptions)
  }

}
