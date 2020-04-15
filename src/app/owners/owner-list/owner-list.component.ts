import { Component } from '@angular/core';
import { Owner } from 'src/app/api/models';
import { Router } from '@angular/router';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent {

  owners$ = this.ownersService.activeOwners$;

  constructor(private router: Router,
              private ownersService: OwnersService) { }

  selectOwner(owner: Owner) {
    this.router.navigate([`/owners/${owner.nickname}`]);
  }
}
