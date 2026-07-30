import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  msg="Hello"
  color="blue"
  fontSize=70
  borderStyle="3px solid black";
  textColor="red"
  isDisabled=true

  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYc9XzU8ISl2cksAcDRSvSdEfStK9NXrimmjwX4_rKQ&s=10"
  // changeColor():void{
  //   this.color=(this.color==="blue"?"green":"blue")
  // }

  // changeBorder(){
  //   this.borderStyle="5px dotted yellow"
  // }


  //changeborder of paragraph based on button click
  //1.3px solid blck 
  //2.5px dotted yellow

}
