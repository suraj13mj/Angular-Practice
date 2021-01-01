import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() numberEmitted = new EventEmitter<number>();
  interval;
  lastNumber = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.numberEmitted.emit(this.lastNumber++);
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
