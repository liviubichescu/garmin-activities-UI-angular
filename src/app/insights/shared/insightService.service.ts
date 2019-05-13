import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Insight} from "./insight.model";


@Injectable()
export class InsightService {
  private activitiesUrl = "http://localhost:8080/api/insights";

  constructor(private httpClient: HttpClient) {
  }

  getInsights(): Observable<Insight[]> {
    return this.httpClient.get<Array<Insight>>(this.activitiesUrl);
  }


}
