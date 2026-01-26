import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modulu1',
  standalone: true,
  templateUrl: './modulu1.html',
})
export class Modulu1 {

  @Input() isNavbar = true;

  @Output() motaSelected = new EventEmitter<{ id: number; name: string }>();

  mota = [
    { id: 1, name: 'Kontzertuak' },
    { id: 3, name: 'Erakusketa' },
    { id: 4, name: 'Dantza' },
  ];

  selectMota(mota: { id: number; name: string }) {
    this.motaSelected.emit(mota);
  }
}
