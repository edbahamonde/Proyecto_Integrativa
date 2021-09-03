import { Component} from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent{
  title = 'Watch';

  interval;
  time = new Date(null);

  startTimer(){
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

  resetTimer(){
    this.time.setSeconds(0);
  }
}
