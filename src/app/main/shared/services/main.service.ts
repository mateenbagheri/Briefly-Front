import { Injectable } from "@angular/core";
import { BaseHttp } from "src/app/core/services/base-http.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private baseHttp: BaseHttp) {}

  shortenUrl(mainUrl) {
    return this.baseHttp.request("POST", "url/").setBodyParams({
      MainUrl: mainUrl,
      ExpDate: {
        Valid: false,
        String: "",
      },
      CollectionID: {
        Valid: false,
        Int64: 0,
      },
    }).send();
  }

  getMainUrl(shortenPath:string){
   return this.baseHttp.request('GET',`url/${shortenPath}`).send()
  }
}
