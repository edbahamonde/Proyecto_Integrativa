import { Component} from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent{
  title = 'Watch';
  segundos_end = 8;

  interval;
  time = new Date(null);

  startTimer(){
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
      this.endTimer();
    }, 1000);
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

  resetTimer(){
    this.time.setSeconds(this.time.setTime(0));
    clearInterval(this.interval);
  }

  endTimer(){
    if(this.time.getSeconds() == this.segundos_end.valueOf()){
      clearInterval(this.interval);
    }
  }
}
