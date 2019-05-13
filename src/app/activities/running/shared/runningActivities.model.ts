import {Distance} from "./distance.model";

export class RunningActivities {
  id: number;
  type: string;
  name : string;
  dateTime : string;
  duration: number;
  distance : Distance;
  pace: number;

}
