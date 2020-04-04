import { Component, OnInit } from '@angular/core';
import { OwnersService } from './owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent {

  data$ = this.service.ownersViewData$;
  displayMode = 'flat';

  constructor(private service: OwnersService) { }

}
