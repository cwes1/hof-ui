import { Component, OnInit } from '@angular/core';
import { OwnersService } from './owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.sass']
})
export class OwnersComponent implements OnInit {

  data$ = this.service.ownersViewData$;

  constructor(private service: OwnersService) { }

  ngOnInit() {
  }

}
