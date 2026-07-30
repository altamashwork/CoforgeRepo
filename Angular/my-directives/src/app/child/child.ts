import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child{
  @Input()
    uname:string=''

@Output() message=new EventEmitter();

  sendMsgToParent(){
    this.message.emit("Hello Parent....")
  }
}