import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { OwnersComponent } from './owners/owners.component';
import { ChampionsComponent } from './champions/champions.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftBoardComponent } from './drafts/draft-board/draft-board.component';
import { OwnerProfileComponent } from './owners/owner-profile/owner-profile.component';
import { OwnerPanelComponent } from './owners/owner-panel/owner-panel.component';
import { NgForByIntegerPipe } from './common/pipes/ng-for-by-integer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    OwnersComponent,
    ChampionsComponent,
    DraftsComponent,
    DraftBoardComponent,
    OwnerProfileComponent,
    OwnerPanelComponent,
    NgForByIntegerPipe
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
