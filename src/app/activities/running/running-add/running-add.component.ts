import { Component, OnInit } from '@angular/core';
import {RunningActivitiesService} from "../shared/runningActivities.service";
import {RunningActivities} from "../shared/runningActivities.model";
import {Distance} from "../shared/distance.model";

@Component({
  selector: 'app-running-add',
  templateUrl: './running-add.component.html',
  styleUrls: ['./running-add.component.css']
})
export class RunningAddComponent implements OnInit {

  public activTypes: string[] = ['CYCLING','RUNNING', 'SWIMMING'];
  public distanceUnit: string[] = ['METERS', 'KILOMETERS', 'MILES'];

  runningActivity: RunningActivities = new RunningActivities();
  distance : Distance = new Distance();

  constructor(private runningService: RunningActivitiesService) {

  }

  ngOnInit() {
  }

  save() {
    this.runningActivity.distance = this.distance;
    this.runningActivity.pace = this.runningActivity.duration/this.runningActivity.distance.value;
    this.runningService.save(this.runningActivity)
      .subscribe(activ => {
        // console.log("activity saved: name: "+ name +" dateTime: "+dateTime+" activity tipe: "+ activity_type);
        // this.location.back();
      });
  }

  onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

  convertToKm(event: number): string {
    const newVal = event * 1000;
    console.log(newVal);
    return newVal.toString();
  }

  convertToInt(val){
    return parseInt(val);
  }
  convertToStr(val :number){
    return val.toString();
  }


}
