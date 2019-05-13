import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RunningActivities} from "./runningActivities.model";
import {Cycling} from "../../cycling/shared/cycling.model";


@Injectable()
export class RunningActivitiesService {
  private activitiesUrl = "http://localhost:8080/api/runningActivities";

  constructor(private httpClient: HttpClient) {
  }

  getRunningActivities(): Observable<RunningActivities[]> {
    return this.httpClient.get<Array<RunningActivities>>(this.activitiesUrl);
  }

  save(runningActiv: RunningActivities): Observable<RunningActivities> {
    return this.httpClient
      .post<RunningActivities>(this.activitiesUrl, runningActiv);
  }


}
