import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class DemoComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() myname: string = '';

  constructor() {
    console.log('1. Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy');
  }

  callName(): void {
    this.myname = 'Swapna Motupally';
    console.log('Button Clicked');
  }
}