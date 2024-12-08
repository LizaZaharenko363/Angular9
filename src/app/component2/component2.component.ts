import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  standalone: true,
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  @Input() message: string = '';
}
