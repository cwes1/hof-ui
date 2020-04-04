import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private service: NavbarService,
              private route: ActivatedRoute) { }

}
