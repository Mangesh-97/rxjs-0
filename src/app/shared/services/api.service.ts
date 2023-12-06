import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getKeyWord$: Subject<string> = new Subject<string>()
  constructor(
    private _http: HttpClient
  ) { }

  getAllPost(): Observable<any> {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
}
