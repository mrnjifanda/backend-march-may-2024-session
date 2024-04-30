import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "http://localhost:3000/api";

  async ajax(url: string, data: any = null, auth: boolean = true) {

    try {

        const options: any = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        if (auth) {

            // const user = local_storage.get(user_key);
            // options.headers.auth_token = user.token;
        }

        if (data) {

            options.method = data.method ?? 'POST'
            options.body = JSON.stringify(data)
        }

        const request = await fetch(this.base_url + url, options);
        return await request.json();
    } catch (error) {

        console.log(error);
        return null
    }
  }

  async getAllPost() {

    try {

      const resquest = await fetch(this.base_url + "/post");
      if (resquest.ok && resquest.status === 200) {
        
        const response = await resquest.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: resquest.status };
    } catch (error: any) {
      
      return { error: true, data: error.message };
    }
  }

  async searchRequest(q: string) {
    try {

      const request = await fetch(this.base_url + "/post/search?q=" + q);
      if (request.ok && request.status === 200) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {

      return { error: true, data: error.message }
    }
  }

  async getOnePost (id: string) {

    try {

      const request = await fetch(this.base_url + "/post/" + id);
      if (request.ok && request.status === 200) {

        const response = await request.json();
        return { error: false, data: response.data };
      }

      return { error: true, data: request.status };
    } catch (error: any) {

      return { error: true, data: error.m };
    }
  }
}
