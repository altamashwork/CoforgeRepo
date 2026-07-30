import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  uname: string = 'Sahil';
  msg: string = '';

  receivedMsgFromChild(msg: string) {
    this.msg = msg;
  }
}