import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  owners$ = this.apiService.getAllOwners()
    .pipe(
      map(owners => owners.map(owner =>
        ({
          ...owner,
          championship_count: Math.round((Math.random() * 5))
        })
      )),
      // sort descending by chips
      map(owners => owners.sort((a, b) => (a.championship_count < b.championship_count ? 1 : -1)))
    );

  activeOwners$ = this.owners$
    .pipe(
      map(owners => owners.filter(owner => owner.is_active))
    );

  ownersViewData$ = combineLatest([this.owners$, this.activeOwners$])
    .pipe(
      map(([owners, activeOwners]) =>
        ({
          owners,
          activeOwners
        })
      )
    );

  constructor(private apiService: ApiService) { }
}
