import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { DraftsComponent } from './drafts/drafts.component';


const routes: Routes = [
  {path: 'owners', component: OwnersComponent},
  {path: 'drafts', component: DraftsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
