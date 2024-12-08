import { Component } from '@angular/core';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  standalone: true, 
  imports: [Component2Component], 
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  parentMessage: string = "That's another message from parent passed to child :)";
}
