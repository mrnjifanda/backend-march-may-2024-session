import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private baseUrl: string = "";
  private token: string = "";

  private getToken (keyName: string): string {
    return this.token;
  }

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  setToken(token: string): void {
    this.token = token;
  }


  getBaseUrl(): string {
    return this.baseUrl;
  }

  async ajax(path: string, data: any = null, auth: string|null = null) {

    try {

        const options: any = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        if (auth) {
          options.headers.authorization = this.getToken(auth);
        }

        if (data) {
        
            if (data.method) {

              options.method = data.method;
              delete data.method;
            } else {

              options.method = 'POST'
            }
            options.body = JSON.stringify(data);
        }

        const request = await fetch(this.getBaseUrl() + path, options);
        if (request.ok && (request.status === 200 || request.status === 201)) {

          const response = await request.json();
          return { error: false, data: response.data };
        }
  
        return { error: true, data: request.status };
    } catch (error: any) {

        console.log(error);
        return { error: true, data: error.message };
    }
  }
}
