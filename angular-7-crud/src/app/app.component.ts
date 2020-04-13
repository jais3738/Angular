import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7crud';
  constructor(private _loaingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      // this._loadingBar.start();
      this._loaingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loaingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loaingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loaingBar.stop();
    }
  }


}
