import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  public test():Observable<string>
  {
    // , 
    //   {
    //     headers: new HttpHeaders({'Content-Type': 'application/json',  accept: 'text/plain'}),
    //     responseType: 'text'
    //   }
    return this.http.get<string>(environment.API_URL + 'SimpleApi')
  }
}
