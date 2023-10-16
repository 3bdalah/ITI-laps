import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './services/hero service/hero.service';
import { StrengthPipe } from './pipes/strength/strength.pipe';
import { HeroComponent } from './hero/hero.component';
import { MessageService } from './services/message/message.service';
import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';
import { NewtestComponent } from './newtest/newtest.component';
import { MessagesComponentForLab } from './lab/messages/messages.lab.component';
import { SquarePipeForLab } from './lab/pipe/square.pipe';
import { HeroServiceForLab } from './lab/hero service/hero.lab.service';
import { DummyComponent } from './dummy/dummy.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    StrengthPipe,
    HeroComponent,
    CounterComponent,
    NewtestComponent,
    SquarePipeForLab,
    MessagesComponentForLab,
    DummyComponent,
    TestComponent
  ],
  providers: [HeroService, MessageService,HeroServiceForLab],
  bootstrap: [AppComponent]
})
export class AppModule { }
