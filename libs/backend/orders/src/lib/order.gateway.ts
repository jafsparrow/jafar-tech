import {
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OrderGateway implements OnGatewayConnection, OnGatewayInit {
  afterInit(server: any) {
    console.log('on gateway init');
  }
  handleConnection(client: any, ...args: any[]) {
    console.log('webosocket on gateway connection');
    client.emit('bro', { name: client.id });
  }
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): Observable<WsResponse<number>> {
    console.log('this message sbuscriber activated.');
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item }))
    );
  }
}
