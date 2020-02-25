import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerComponent } from './owner/owner.component';
import { ChampionsComponent } from './champions/champions.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftBoardComponent } from './drafts/draft-board/draft-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OwnerComponent,
    ChampionsComponent,
    DraftsComponent,
    DraftBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
