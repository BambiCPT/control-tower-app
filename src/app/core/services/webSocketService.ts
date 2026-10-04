import { Injectable } from "@angular/core";
import { WebSocketSubject } from "rxjs/webSocket";
import { Message } from "../../models/message";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private _socket$!: WebSocketSubject<Message>;
}