import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() { }

  connect(nsp): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url+nsp);

    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server " + nsp)
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });
    
    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    return Rx.Subject.create(observer, observable);
  }

}
