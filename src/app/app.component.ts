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
  rodada = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;

    if (this.rodada < 8) {
      if (this.counter > 30) {
        this.counter = 0;
        this.rodada++;
      }
    } else this.counter = 0;
  }, 10);

  getNumbers() {}

  //getIdade() {
  //  return 2022 - this.nascimento;
  //}
  // getMinutos() {
  //   return Math.trunc(this.counter / 60);
  // }

  // getSegundos() {
  //   return Math.trunc(this.counter % 60);
  //  }
}
