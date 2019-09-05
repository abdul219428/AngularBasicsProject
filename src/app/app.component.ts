import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
  userText = 'JoJo';

  showDetails(): void {
    console.log('button clicked');
  }
}
