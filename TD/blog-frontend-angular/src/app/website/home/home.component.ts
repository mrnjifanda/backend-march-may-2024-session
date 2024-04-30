import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  posts: any = [];
  constructor(private apiService: ApiService) {

    this.apiService.getAllPost().then((res) => {

      if (res.error) {

        alert(res.data);
        console.log(res.data);
      } else {

        this.posts = res.data;
      }
    });
  }
}
