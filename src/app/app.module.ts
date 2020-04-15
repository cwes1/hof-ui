import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { OwnersComponent } from './owners/owners.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftBoardComponent } from './drafts/draft-board/draft-board.component';
import { OwnerProfileComponent } from './owners/owner-profile/owner-profile.component';
import { NgForByIntegerPipe } from './common/pipes/ng-for-by-integer.pipe';
import { OwnerNameplateComponent } from './owners/owner-nameplate/owner-nameplate.component';
import { OwnerProfileTitlePipe } from './owners/pipes/owner-profile-title.pipe';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OwnersComponent,
    DraftsComponent,
    DraftBoardComponent,
    OwnerProfileComponent,
    NgForByIntegerPipe,
    OwnerNameplateComponent,
    OwnerProfileTitlePipe,
    OwnerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
