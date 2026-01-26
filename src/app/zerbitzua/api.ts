import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Api {
  private http = inject(HttpClient);
  private apiUrl = "https://api.euskadi.eus/culture/events/v1.0";
  data = null;
  page = 0;
  elements = 20;

  get_event(id: number): Observable<any[]> {
    this.page = this.page + 1;
    return this.http.get<any>(this.apiUrl +
      '/events/byType/' + id);
  }

}