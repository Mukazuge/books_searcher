import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingCommunicatorService {
  public listSubject = new Subject();

  constructor() { }

  sendList(data: any) {
    this.listSubject.next(data);
  }
}
