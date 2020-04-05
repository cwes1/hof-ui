import { Component, OnInit, Input } from '@angular/core';
import { Owner } from 'src/app/api/models';
import { NgForByIntegerPipe } from 'src/app/common/pipes/ng-for-by-integer.pipe';

@Component({
  selector: 'app-owner-nameplate',
  templateUrl: './owner-nameplate.component.html',
  styleUrls: ['./owner-nameplate.component.scss'],
  providers: [ NgForByIntegerPipe ]
})
export class OwnerNameplateComponent implements OnInit {

  @Input() owner: Owner;

  constructor() { }

  ngOnInit(): void {
  }

}