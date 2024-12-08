import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {
  countdown: number = 10;
  timer: any;
  imageSource: string = 'assets/images/before.jpg'; 

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.imageSource = 'assets/images/before.jpg';
    this.countdown = 10;
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.changeImage();
        this.startCountdown();
      }
    }, 1000);
  }
  

  changeImage() {
    this.imageSource = 'assets/images/explode.jpg';  
  }
}
