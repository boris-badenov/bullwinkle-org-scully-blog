import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'scully-blog';

  isAdminPage$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAdminPage$ = this.router.events.pipe(
      filter((evt: any) => {
        return evt instanceof NavigationEnd;
      }),
      map((evt: NavigationEnd) => {
        return evt.url.includes('/admin');
      }),
    );
  }
}
