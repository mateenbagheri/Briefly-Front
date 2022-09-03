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
      })
      .send();
  }

  saveUrlInCollection(LinkID, CollectionID) {
    return this.baseHttp
      .request("POST", "url/")
      .setBodyParams({
        LinkID: LinkID,
        CollectionID: CollectionID,
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

  addCollection(CollectionName, editID?) {
    if (editID) {
      return this.baseHttp
        .request("PUT", `collection/${editID}`)
        .setBodyParams({
          CollectionID: editID,
          CollectionName: CollectionName,
          UserID: this.userService.User.userID,
        })
        .send();
    } else {
      return this.baseHttp
        .request("POST", "collection/")
        .setBodyParams({
          CollectionName: CollectionName,
          UserID: this.userService.User.userID,
        })
        .send();
    }
  }

  getCollectionUrls(CollectionID) {
    return this.baseHttp
      .request("GET", `url/collection/${CollectionID}`)
      .send();
  }

  deleteCollection(CollectionID) {
    return this.baseHttp.request("DELETE", `collection/${CollectionID}`).send();
  }

  getUserUrls() {
    return this.baseHttp
      .request("GET", `url/user/${this.userService.User.userID}`)
      .send();
  }
}
