import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviornments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }
  base_url: string = environment.base_url;
  signUp(body: any) {
    var url = this.base_url + 'alumni/registration';
    return this.httpClient.post<any>(url, body);
  }
  login(body:any){
    var url = this.base_url + 'login';
    return this.httpClient.post<any>(url,body);
  }
 

}
