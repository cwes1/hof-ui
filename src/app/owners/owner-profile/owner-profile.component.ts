import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Owner } from 'src/app/api/models';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerProfileComponent implements OnInit {

  @Input() owner: Owner;

  constructor(private ownersService: OwnersService) { }

  ngOnInit() {
  }

  closeProfile() {
    this.ownersService.selectOwner(null);
  }

}
