import { Component, NgZone } from '@angular/core';

declare const logToELK: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-monitoring-app';

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        logToELK('Angular App Log Message');
      }, 5000);
    });
  }
}
