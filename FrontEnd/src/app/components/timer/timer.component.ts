import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `<p>{{mainTimer()}}</p>`,
  styles: [``]
})
export class TimerComponent implements OnInit {


  public clsDay:string = "";
  public clsHour:string = "";
  public clsMinute:string = "";
  public clsSecond:string = "";
  
  private now = new Date();

  constructor() { 
    this.TimerReset(this.now)
  }
  
  ngOnInit(): void {
    setInterval(()=>{
      this.mainTimer();
      if (this.mainTimer() == "00:00:00:00"){
        clearInterval();
      }
    },1000);
  }

  private TimerReset(now:Date):Date{
    var ResetDay = new Date();
        ResetDay.setDate(now.getDate() + (8 - 1 - now.getDay() + 7) % 7 + 1);
        ResetDay.setHours(4,0,0,0);
    return ResetDay;
  }
  public mainTimer():string{
    const now:number  = new Date().getTime();
    const deadline:number = new Date(this.TimerReset(this.now)).getTime();
    const gap:number = deadline - now;

    const second:number = 1000;
    const minute:number = second * 60;
    const hour:number = minute * 60;
    const day:number = hour * 24;

    const numDay:number = Math.floor(gap / day);
    const numHour:number = Math.floor((gap % day) / hour);
    const numMinute:number = Math.floor((gap % hour) / minute);
    const numSecond:number = Math.floor((gap % minute) / second)+1;

    this.clsDay = numDay.toLocaleString();
    this.clsHour = numHour.toLocaleString();
      this.clsHour = numHour < 10 ? '0' + this.clsHour : this.clsHour;
      this.clsHour = numHour == 60 ? '00' : this.clsHour;
    this.clsMinute = numMinute.toLocaleString();
      this.clsMinute = numMinute < 10 ? '0' + this.clsMinute : this.clsMinute;
      this.clsMinute = numMinute == 60 ? '00' : this.clsMinute;
    this.clsSecond = numSecond.toLocaleString();
      this.clsSecond = numSecond < 10 ? '0' + this.clsSecond : this.clsSecond;
      this.clsSecond = numSecond == 60 ? '00' : this.clsSecond;

    if (numDay == 0 && numHour == 0 && numMinute == 0 && numSecond == 0){
      return "00:00:00:00";
    }
    else {
      return this.clsDay + ":" + this.clsHour + ":" + this.clsMinute + ":" + this.clsSecond;
    }
  }
}
