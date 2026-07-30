import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements
OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy
{

  @Input() myname=''
  constructor(){
    console.log("1.Constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("2.ngOnchanges : ",changes)
    
   
  }
  ngOnInit(): void {
    console.log("3.ngOnInit")
    
  }
  ngDoCheck(): void {
    console.log("4.ngDoCheck")
;
  }
  ngAfterContentInit(): void {
    console.log("5.ngAfterContentInit")
   
  }
  ngAfterContentChecked(): void {
    console.log("6.ngAfterContentChecked")
    
  }
  ngAfterViewInit(): void {
    console.log("7.ngViewInit")
    
  }
  ngAfterViewChecked(): void {
    console.log("8.ngAfterViewChcked")
    
  }
  ngOnDestroy(): void {
    console.log("9.onDestroy")
   
  }

  callName(){
    this.myname="Swapna Motupally"
  }

}
