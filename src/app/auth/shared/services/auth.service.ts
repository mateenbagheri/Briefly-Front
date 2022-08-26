import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private baseHttp: BaseHttp) {}

  signUp(model) {
    return this.baseHttp
      .request('POST', 'user/signup')
      .setBodyParams(model)
      .send();
  }

  login(model) {
    return this.baseHttp
      .request('POST', 'user/login')
      .setBodyParams(model)
      .send();
  }
}
