import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modulu1 } from "./modulu1/modulu1";
import { Modulu2 } from "./modulu2/modulu2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Modulu1, Modulu2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularProiektua');
}
