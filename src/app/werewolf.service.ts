import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { INSPECT_MAX_BYTES } from 'buffer';


@Injectable()
export class WerewolfService {

  messages: Subject<any>;

  constructor(private wsService: WebsocketService) {}

  sendMsg(msg) {
    this.messages.next(msg);
  }

  setConnection(nsp) {
    this.messages = <Subject<any>>this.wsService.connect(nsp).map((response: any): any => {
      return response;
    })
  }

}
