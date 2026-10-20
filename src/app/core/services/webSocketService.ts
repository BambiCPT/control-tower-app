import { Injectable } from "@angular/core";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { Message } from "../../models/message";
import { catchError, EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private _socket$: WebSocketSubject<Message> | null = null;
  private wsEndpoint = 'ws://localhost:8001/chat';

  public connect(): Observable<Message> {
    if (!this._socket$ || this._socket$?.closed) {
      this._socket$ = webSocket<Message>({
        url: this.wsEndpoint,
        openObserver: { next: () => {}},
        closeObserver: { next: () => {}}
      })
    }

    return this._socket$.asObservable().pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    )
  }

  public sendMessage(message: Message): void {
    if (this._socket$ && !this._socket$.closed) {
      this._socket$.next(message);
    } else {
      console.error(`Cannot send message.`)
    }
  };

  public close(): void {
    if (this._socket$) {
      this._socket$?.complete();
    }
  }
}