import { NgModule } from '@angular/core';
//IMPORTED MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
//SERVICES
import { MainService, WeaponService } from './main.service';
//COMPONENTS
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { TimerComponent } from './components/timer/timer.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';



@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerComponent,
    routingComponents,
    ToDosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainService,WeaponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
