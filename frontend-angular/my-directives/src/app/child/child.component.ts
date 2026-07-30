import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
    uname:string=''

@Output() message=new EventEmitter();

  sendMsgToParent(){
    this.message.emit("Hello Parent....")
  }
}
