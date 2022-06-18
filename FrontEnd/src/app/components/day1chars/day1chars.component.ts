import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';

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
export class Day1charsComponent implements OnInit {

  public selectedId:number = 0;
  public MondstadtCharacters:characterInterface[] = [];
  public LiyueCharacters:characterInterface[] = [];
  public InazumaCharacters:characterInterface[]= [];

  constructor(
    private _mainService:MainService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getDay1Characters(1).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getDay1Characters(2).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getDay1Characters(3).subscribe(data => this.InazumaCharacters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }
}
