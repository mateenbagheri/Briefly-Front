import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(
    new User()
  );
  constructor() {
    if (this.token) this.setUserByToken(this.token);
  }

  public get token(): string | null {
    return localStorage.getItem("Token");
  }

  public setCurrentUser(user: User) {
    this.user$.next(user);
  }

  public get User(): User {
    return this.user$.value;
  }

  setUserByToken(encodedToken: string): any {
    let decodedToken = jwt_decode(encodedToken, { header: false });
    let user = new User(decodedToken);
    localStorage.setItem("Token", encodedToken);
    this.setCurrentUser(user);
    return user;
  }

  onLogout() {
    localStorage.clear();
    this.user$.next(new User());
  }
}
