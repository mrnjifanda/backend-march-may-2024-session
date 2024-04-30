import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit{

  posts: any = [];
  q: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.q = params['q'];
      this.apiService.searchRequest(this.q).then((res) => {

        if (res.error) {

          alert(res.data);
          console.log(res.data);
        } else {
  
          this.posts = res.data;
        }
      })
    });
  }
}
