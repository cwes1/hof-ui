import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Owner } from 'src/app/api/models';

@Component({
  selector: 'app-owner-panel',
  templateUrl: './owner-panel.component.html',
  styleUrls: ['./owner-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerPanelComponent implements OnInit {

  @Input() owner: Owner;

  constructor() { }

  ngOnInit() {
  }

}
