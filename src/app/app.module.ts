import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { StreamingComponent } from './streaming/streaming.component';
import { CoursListComponent } from './cours-list/cours-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    NavbarComponent,
    DetailsComponent,
    StreamingComponent,
    CoursListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
