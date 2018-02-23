import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  constructor() {
    this.title = 'App works';
    this.name = 'Endava';
  }

  handleBlur(event) {
    console.log(event);
    this.name = event.target.value;
  }
  handleInput(event) {
    this.name = event.target.value;
  }
  handleClick(value) {
    this.name = value;
  }
}
