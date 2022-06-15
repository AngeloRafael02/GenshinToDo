import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-day2chars',
  template: `
  <p>MONDSTADT</p>
  <div class="container">
  <ul  *ngFor="let Character of MondstadtCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>LIYUE</p>
  <div class="container">
  <ul  *ngFor="let Character of LiyueCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>INAZUMA</p>
  <div class="container">
  <ul  *ngFor="let Character of InazumaCharacters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul>
  </div>
  
  `,
  styleUrls: ['day2chars.component.scss'  ]
})
export class Day2charsComponent implements OnInit {

  public selectedId:number = 0;
  public MondstadtCharacters:characterInterface[] = [];
  public LiyueCharacters:characterInterface[] = [];
  public InazumaCharacters:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getDay2Characters(0).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getDay2Characters(1).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getDay2Characters(2).subscribe(data=> this.InazumaCharacters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }
}
