import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopfooterComponent } from './mycomponent/topfooter/topfooter.component';
import { BottomfooterComponent } from './mycomponent/bottomfooter/bottomfooter.component';
import { HomeComponent } from './mycomponent/home/home.component';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';
import { EventbodyComponent } from './mycomponent/eventbody/eventbody.component';
import {HttpClientModule} from '@angular/common/http';
import { TagsComponent } from './mycomponent/tags/tags.component';
import { AlleventComponent } from './mycomponent/allevent/allevent.component';
import { EventsdataComponent } from './mycomponent/eventsdata/eventsdata.component';
import { WebinarsComponent } from './mycomponent/webinars/webinars.component';
@NgModule({
  declarations: [
    AppComponent,
    TopfooterComponent,
    BottomfooterComponent,
    HomeComponent,
    NavbarComponent,
    EventbodyComponent,
    TagsComponent,
    AlleventComponent,
    EventsdataComponent,
    WebinarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
