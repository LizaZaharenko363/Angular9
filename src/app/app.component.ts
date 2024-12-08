import { Component } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Component1Component,
    Component3Component,
    Component4Component,
    Component5Component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'lab8';
}
