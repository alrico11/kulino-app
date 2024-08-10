import { ILogin } from "./login.@types";

export class AuthService {
  static async login({email,password}: ILogin): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password") {
          resolve();
        } else {
          reject("Invalid email or password");
        }
      }, 1000);
    });
  }
}
