import { Injectable } from '@angular/core';
import { BaseHttp } from 'src/app/core/services/base-http.service';
import { UserService } from 'src/app/core/services/user.service';

@Injectable()
export class ReportService {
  constructor(
    private readonly baseHttp: BaseHttp,
    private userService: UserService
  ) {}

  getHistroy() {
    return this.baseHttp
      .request('GET', 'collection/user/' + this.userService.User.userID)
      .send();
  }
  getTopLinkReport() {
    return this.baseHttp
      .request('GET', 'collection/user/' + this.userService.User.userID)
      .send();
  }
}
