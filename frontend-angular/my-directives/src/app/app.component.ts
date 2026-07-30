import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributesComponent } from './components/attributes/attributes.component';
import { StructuralComponent } from "./components/structural/structural.component";
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AttributesComponent, StructuralComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-directives';
}
