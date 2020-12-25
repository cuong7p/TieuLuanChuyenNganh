import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFirstComponentFunction = new EventEmitter();
  subsVar!: Subscription;

  constructor() { }

  // tslint:disable-next-line:typedef
  onFirstComponentButtonClick(obj: object) {
    this.invokeFirstComponentFunction.emit(obj);
  }
}
