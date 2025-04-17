import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import 'intersection-observer';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projbody',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './projbody.component.html',
  styleUrl: './projbody.component.css',
})
export class ProjbodyComponent implements OnInit {
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if the platform is a browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Navigation methods
  onHome() {
    this.router.navigateByUrl('home');
  }

  onConnect() {
    this.router.navigateByUrl('about');
  }

  onExpertise() {
    this.router.navigateByUrl('expertise');
  }

  onProject() {
    this.router.navigateByUrl('project');
  }

  onResume() {
    this.router.navigateByUrl('resume');
  }

  onContact() {
    this.router.navigateByUrl('contact');
  }

  allProjects() {
    this.router.navigateByUrl('allprojects');
  }
  weddingCase() {
    this.router.navigateByUrl('casestudy');
  }
}
