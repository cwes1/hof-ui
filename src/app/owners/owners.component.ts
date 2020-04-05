import { Component } from '@angular/core';
import { OwnersService } from './owners.service';
import { Owner } from '../api/models';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent {

  data$ = this.service.ownersViewData$;

  constructor(private service: OwnersService) { }

  selectOwner(owner: Owner) {
    this.service.selectOwner(owner);
  }

}
