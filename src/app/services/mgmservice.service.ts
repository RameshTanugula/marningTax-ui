import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MGMServiceService {
  baseUrl = environment.apiserver;
  constructor(private http: HttpClient) {

  }
  userLogin(payoad: any) {
   return this.http.post(this.baseUrl + 'login', payoad)
  }
  userRegister(payoad: any) {
   return this.http.post(this.baseUrl + 'register', payoad)
  }

  productListSearch(payload: any) {
    return this.http.post(
      `${this.baseUrl}productMasters/productSearch`,
      payload
    );
  }
  produtListById(productId: any, formid: any) {
    //formid=sellerid
    return this.http.get(
      `${this.baseUrl}ProductMasters/${productId}/${formid}`
    );
  }
}
