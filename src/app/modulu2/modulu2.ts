import { Component, Input, signal, OnChanges, SimpleChanges } from '@angular/core';
import { inject } from '@angular/core';
import { Api } from '../zerbitzua/api';

@Component({
  selector: 'app-modulu2',
  standalone: true,
  templateUrl: './modulu2.html',
})
export class Modulu2 {
  @Input() mota: { id: number, name: string } | null = null;

  clientea = inject(Api);
  data: any = signal(null);
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['mota'] && this.mota) {
      this.clientea.get_event(this.mota.id).subscribe((response) => {
        this.data.set(response);
        console.log(this.data());
      });
    }
  }
}
