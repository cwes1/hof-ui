import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { Owner } from '../api/models';

@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  private selectedOwnerNicknameSource = new BehaviorSubject<string>(null);
  selectedOwnerNickname$ = this.selectedOwnerNicknameSource.asObservable();

  owners$ = this.apiService.getAllOwners().pipe(
    map(owners =>
      owners.map(
        owner =>
          ({
            ...owner,
            championship_count: Math.round(Math.random() * 5),
          } as Owner),
      ),
    ),
    // sort descending by chips
    map(owners =>
      owners.sort((a, b) => b.championship_count - a.championship_count),
    ),
  );

  selectedOwner$ = combineLatest([
    this.selectedOwnerNickname$,
    this.owners$,
  ]).pipe(
    map(([nickname, owners]) => {
      if (nickname) {
        return owners.find(
          owner => owner.nickname.toLowerCase() === nickname.toLowerCase(),
        );
      } else {
        return null;
      }
    }),
  );

  activeOwners$ = this.owners$.pipe(
    map(owners => owners.filter(owner => owner.is_active)),
  );

  ownersViewData$ = combineLatest([
    this.owners$,
    this.activeOwners$,
    this.selectedOwner$,
  ]).pipe(
    map(([owners, activeOwners, selectedOwner]) => ({
      owners,
      activeOwners,
      selectedOwner,
    })),
  );

  constructor(private apiService: ApiService) {}

  selectOwner(ownerNickname: string): void {
    this.selectedOwnerNicknameSource.next(ownerNickname);
  }
}
