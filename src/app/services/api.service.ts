import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get(`${this.baseUrl}/blogs?populate=*`);
  }

  getBlogBySlug(slug: string) {
    return this.http.get(
      `${this.baseUrl}/blogs?filters[slug][$eq]=${slug}&populate=*`,
    );
  }

  getNews() {
    return this.http.get(`${this.baseUrl}/news?populate=*`);
  }
}
