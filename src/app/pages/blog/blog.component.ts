import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router'; //

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getBlogs().subscribe((res: any) => {
      this.blogs = res.data;
    });
  }
}
