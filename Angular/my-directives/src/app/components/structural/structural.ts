import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  imports: [CommonModule],
  templateUrl: './structural.html',
  styleUrl: './structural.css'
})
export class StructuralComponent {

    //isLoggedIn=false;

    // checkLogin(){
    //   this.isLoggedIn=!this.isLoggedIn
    // }

    // role='student'
    students=[
      {id:1,name:"Sahil",course:"Java"},
      {id:2,name:"Atharva",course:"C"},
      {id:3,name:"Shiva",course:"Angular"}
    ]


    // changeRole(role: string) {
    //   this.role=role
//}

}