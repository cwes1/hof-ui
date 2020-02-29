import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  owners$ = this.apiService.getAllOwners()
    .pipe(
      map(owners =>
        owners.map(owner =>
          ({
            display_value : owner.nickname,
            link : owner.id
          })
        )
      )
    );

  navItems$ = combineLatest([this.owners$])
    .pipe(
      map(([owners]) =>
        ({
          owners
        })
      )
    );

  constructor(private apiService: ApiService) { }
}
