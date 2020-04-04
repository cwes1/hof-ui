import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Owner } from './models/Owner';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ownersUrl = `${environment.baseUrl}/owners`;

  constructor(private http: HttpClient) { }

  // All owners
  getAllOwners(): Observable<Owner[]> {
    const url = `${this.ownersUrl}/all`;

    return this.callCachedApi<Owner[]>(url);
  }

  // Active owners
  getActiveOwners(): Observable<Owner[]> {
    const url = `${this.ownersUrl}/all/active`;

    return this.callCachedApi<Owner[]>(url);
  }

  // shareReplay(1) will keep the last emission in memory until user forces refresh
  private callCachedApi<T>(url: string) {
    return this.http.get<T>(url)
      .pipe(
        shareReplay(1)
      );
  }
}
