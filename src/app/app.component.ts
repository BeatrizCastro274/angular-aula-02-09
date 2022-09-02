import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Beatriz Castro';
  nascimento = 2000;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  });

  getIdade() {
    return 2022 - this.nascimento;
  }
}
