import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Genshin To Do App';

  private CurrentDate = new Date().getDay();

  public DefaultCharacterChildRoute():string{
    if (this.CurrentDate == 0){
      return 'Characters/allchars'
    } else if(this.CurrentDate == 1 || this.CurrentDate == 4 ){
      return 'Characters/day1chars'
    } else if(this.CurrentDate == 2 || this.CurrentDate == 5 ){
      return 'Characters/day2chars'
    } else if(this.CurrentDate == 3 || this.CurrentDate == 6 ){
      return 'Characters/day3chars'
    } else { return '**' }
  }
  public DefaultWeaponChildRoute():string{
    if (this.CurrentDate == 0){
      return 'Weapons/allweapons'
    } else if(this.CurrentDate == 1 || this.CurrentDate == 4 ){
      return 'Weapons/day1weapons'
    } else if(this.CurrentDate == 2 || this.CurrentDate == 5 ){
      return 'Weapons/day2weapons'
    } else if(this.CurrentDate == 3 || this.CurrentDate == 6 ){
      return 'Weapons/day3weapons'
    } else { return '**' }
  }
}
