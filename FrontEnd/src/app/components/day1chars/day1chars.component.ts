import { Component, Injector, OnInit } from '@angular/core';
import { characterInterface } from '../../interfaces';
import { BaseCharacterClassComponent } from '../Utils/base-character-class.component';

@Component({
  selector: 'app-day1chars',
  template: `
  <p>FREEDOM (Forsaken Rift, Mondstadt)</p>
  <div class="container">  
  <ul  *ngFor="let Character of MondstadtCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul><br>
  </div>
  <p>PROSPERITY (Taishan Mansion, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Character of LiyueCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul><br>
  </div>
  <p>TRANSIENCE (Violet Court, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Character of InazumaCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul><br>
  </div>
  `,
  styleUrls: ['day1chars.component.scss']
})
export class Day1charsComponent extends BaseCharacterClassComponent implements OnInit {

  public selectedId = super.Id;
  public MondstadtCharacters = super.Characters;
  public LiyueCharacters = super.Characters;
  public InazumaCharacters = super.Characters;

  constructor(
   injector:Injector
  ) {
    super(injector)
   }

  ngOnInit(): void {
    this._mainService.getDay1Characters(1).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getDay1Characters(2).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getDay1Characters(3).subscribe(data => this.InazumaCharacters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }
}
