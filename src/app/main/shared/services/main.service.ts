import { Injectable } from "@angular/core";
import { BaseHttp } from "src/app/core/services/base-http.service";
import { UserService } from "src/app/core/services/user.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private baseHttp: BaseHttp, private userService: UserService) {}

  shortenUrl(mainUrl) {
    return this.baseHttp
      .request("POST", "url/")
      .setBodyParams({
        MainUrl: mainUrl,
        ExpDate: {
          Valid: false,
          String: "",
        },
        CollectionID: {
          Valid: false,
          Int64: 0,
        },
      })
      .send();
  }

  getMainUrl(shortenPath: string) {
    return this.baseHttp.request("GET", `url/${shortenPath}`).send();
  }

  getCollections() {
    return this.baseHttp
      .request("GET", "collection/user/" + this.userService.User.userID)
      .send();
  }
}
