import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florine';

  currentComponent: string = 'services';

  Services() {
    this.currentComponent = 'services';
  }

  Projects() {
    this.currentComponent = 'projects';
  }

  Contact() {
    this.currentComponent = 'contact';
  }
}
