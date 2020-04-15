import { Component, OnInit } from '@angular/core';
import { OwnersService } from './owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  data$ = this.service.ownersViewData$;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
   this.service.selectOwner(null);
  }

}
