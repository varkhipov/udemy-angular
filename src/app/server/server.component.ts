import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  private randomMin = 0;
  private randomMax = 100;

  serverId: number = Math.floor(Math.random() * (this.randomMax - this.randomMin + 1) + this.randomMin);
  serverStatus: string = 'offline';

  constructor() {
    this.refreshServerStatus();
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'rgba(143, 188, 143, 0.29)' : 'rgba(205, 92, 92, 0.34)';
  }

  refreshServerStatus() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
