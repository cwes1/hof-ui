import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { DraftsComponent } from './drafts/drafts.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { OwnerProfileComponent } from './owners/owner-profile/owner-profile.component';


const routes: Routes = [
  {
    path: 'owners',
    component: OwnersComponent,
    children: [
      {
        path: ':nickname',
        component: OwnerProfileComponent
      },
      {
        path: '',
        component: OwnerListComponent
      }
    ]
  },
  {
    path: 'drafts',
    component: DraftsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
