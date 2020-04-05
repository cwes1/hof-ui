import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { Owner } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  private selectedOwnerSource = new BehaviorSubject<Owner>(null);
  selectedOwner$ = this.selectedOwnerSource.asObservable();

  owners$ = this.apiService.getAllOwners()
    .pipe(
      map(owners => owners.map(owner =>
        ({
          ...owner,
          championship_count: Math.round((Math.random() * 5))
        })
      )),
      // sort descending by chips
      map(owners => owners.sort((a, b) => (b.championship_count - a.championship_count)))
    );

  activeOwners$ = this.owners$
    .pipe(
      map(owners => owners.filter(owner => owner.is_active))
    );

  ownersViewData$ = combineLatest([this.owners$, this.activeOwners$, this.selectedOwner$])
    .pipe(
      map(([owners, activeOwners, selectedOwner]) =>
        ({
          owners,
          activeOwners,
          selectedOwner
        })
      )
    );

  constructor(private apiService: ApiService) { }

  selectOwner(owner: Owner) {
    this.selectedOwnerSource.next(owner);
  }
}
