import { Component } from '@angular/core';
import { DemoComponent } from './components/demo/demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = "Sahil";

  changeName() {
    this.name = "Swapna Motupally";
  }
}