import { Component } from '@angular/core';
import { Modulu1 } from './modulu1/modulu1';
import { Modulu2 } from './modulu2/modulu2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Modulu1, Modulu2],
  templateUrl: './app.html',
})
export class App {
  selectedMota: string | null = null;

  isNavbar = true;
  
}
