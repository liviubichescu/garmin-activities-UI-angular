import { Component, OnInit } from '@angular/core';
import {InsightService} from "../shared/insightService.service";
import {Insight} from "../shared/insight.model";

@Component({
  selector: 'app-insights-list',
  templateUrl: './insights-list.component.html',
  styleUrls: ['./insights-list.component.css']
})
export class InsightsListComponent implements OnInit {

  insights: Insight[];

  constructor(private insightService: InsightService) { }

  ngOnInit() {
    this.getInsights();
  }

  getInsights(){
    this.insightService.getInsights().subscribe(insight=> this.insights = insight);
  }

}
