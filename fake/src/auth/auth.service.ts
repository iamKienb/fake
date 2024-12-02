import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signUp() {
    console.log("Sign Up");
  }
}
