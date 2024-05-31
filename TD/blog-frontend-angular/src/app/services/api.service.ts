import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private fetchService: FetchService) {

    this.fetchService.setBaseUrl("http://localhost:3000/api");
  }

  setCookie(name: string, value: string): void {
  
    const now = new Date();
    const expires = new Date(now.getTime() + 60 * 30 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  getCookie(name: string): string|null {

    let cookies: any = {};
    document.cookie.split(";").forEach(cookie => {
      let [key, value] = cookie.split("=");
      cookies[key] = value;
    });
  
    return cookies[name] ?? null;
  }

  async getAllPost() {

    return await this.fetchService.ajax("/post");
  }

  async searchRequest(q: string) {

    return await this.fetchService.ajax("/post/search?q=" + q);
  }

  async getOnePost (id: string) {

    return await this.fetchService.ajax("/post/" + id);
  }

  async register (data: any) {

    return await this.fetchService.ajax("/auth/register", data);
  }

  async login (data: any) {

    return await this.fetchService.ajax("/auth/login", data);
  }

  async confirmEmail (data: any) {

    return await this.fetchService.ajax("/auth/confirm-email", data);
  }

  async getAllPostByAuthUser() {

    const token = this.getCookie(" authorization");
    console.log(token);
    
    if (token) {

      this.fetchService.setToken("Bearer " + token);
      return await this.fetchService.ajax("/post/user", null, "authorization");
    }

    return { error: true, data: "Auth not found" };
  }
}
