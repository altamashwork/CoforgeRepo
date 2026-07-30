import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {

    //isLoggedIn=false;

    // checkLogin(){
    //   this.isLoggedIn=!this.isLoggedIn
    // }

    // role='student'
    students=[
      {id:1,name:"Swapna",course:"Java"},
      {id:2,name:"Swathi",course:"C"},
      {id:3,name:"Swetha",course:"Angular"}
    ]


    // changeRole(role: string) {
    //   this.role=role
//}

}
