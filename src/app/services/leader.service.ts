import {Injectable} from '@angular/core';
import {Leader} from "../shared/leader";
import {LEADERS} from "../shared/leaders";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() {
  }

  public getLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(1000));
  }
}
