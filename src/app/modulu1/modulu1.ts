import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modulu1',
  standalone: true,
  templateUrl: './modulu1.html',
})
export class Modulu1 {
  isNavbar = true;

  mota = ['Kontzertuak', 'Erakusketa', 'Dantza'];

  @Output() motaSelected = new EventEmitter<string>();
  @Output() layoutChange = new EventEmitter<boolean>();

  selectMota(mota: string) {
    this.motaSelected.emit(mota);
  }

  toggleLayout() {
    this.isNavbar = !this.isNavbar;
    this.layoutChange.emit(this.isNavbar);
  }
}
