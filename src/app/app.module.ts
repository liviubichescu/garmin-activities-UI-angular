import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CyclingListComponent} from "./activities/cycling/cycling-list/cycling-list.component";
import {CyclingComponent} from "./activities/cycling/cycling.component";
import {CyclingService} from "./activities/cycling/shared/cycling.service";
import {RunningComponent} from "./activities/running/running.component";
import {RunningListComponent} from "./activities/running/running-list/running-list.component";
import {RunningActivitiesService} from "./activities/running/shared/runningActivities.service";
import {InsightsComponent} from "./insights/insights.component";
import { CyclingAddComponent } from './activities/cycling/cycling-add/cycling-add.component';
import { InsightsListComponent } from './insights/insights-list/insights-list.component';
import {InsightService} from "./insights/shared/insightService.service";
import { RunningAddComponent } from './activities/running/running-add/running-add.component';


@NgModule({
  declarations: [
    AppComponent,
    CyclingListComponent,
    CyclingComponent,
    InsightsComponent,
    RunningComponent,
    RunningListComponent,
    CyclingAddComponent,
    InsightsListComponent,
    RunningAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CyclingService, RunningActivitiesService, InsightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
