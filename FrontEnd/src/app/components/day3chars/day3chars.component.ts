import { Component, Injector, OnInit } from '@angular/core';
import { BaseCharacterClassComponent } from '../Utils/base-character-class.component';

@Component({
  selector: 'app-day3chars',
  template: `
  <p>BALLAD (Forsaken Rift, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Character of MondstadtCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+1)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>GOLD (Taishan Mansion, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Character of LiyueCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+7)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>LIGHT (Violet Court, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Character of InazumaCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+12)">
          </abbr>
      </li>
  </ul>
  </div>
  
  `,
  styleUrls: ['day3chars.component.scss']
})
export class Day3charsComponent  extends BaseCharacterClassComponent implements OnInit {

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
    this._mainService.getDay3Characters(1).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getDay3Characters(2).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getDay3Characters(3).subscribe(data => this.InazumaCharacters = data);
  }

  onSelect2(index:number){  
    this.router.navigate(['Characters/day3chars',index]);
  }
}
