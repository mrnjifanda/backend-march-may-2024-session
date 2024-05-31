import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  posts: any = [];
  constructor(private apiService: ApiService) {

    this.apiService.getAllPostByAuthUser().then((res) => {

      if (res.error) {

        alert(res.data);
        console.log(res.data);
      } else {

        this.posts = res.data;
      }
    });
  }
}
