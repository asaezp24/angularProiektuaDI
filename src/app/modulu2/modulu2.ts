import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modulu2',
  standalone: true,
  templateUrl: './modulu2.html',
})
export class Modulu2 {
  @Input() mota: string | null = null;

  frutas = ['Manzana', 'Pera', 'Naranja', 'Banana', 'Kiwi'];
}
