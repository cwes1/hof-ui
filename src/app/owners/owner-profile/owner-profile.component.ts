import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss']
})
export class OwnerProfileComponent implements OnInit {

  owner$ = this.ownersService.selectedOwner$;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ownersService: OwnersService) { }

  ngOnInit(): void {
    this.ownersService.selectOwner(this.route.snapshot.params.nickname);
  }

  closeProfile() {
    this.router.navigate(['/owners']);
  }
}
