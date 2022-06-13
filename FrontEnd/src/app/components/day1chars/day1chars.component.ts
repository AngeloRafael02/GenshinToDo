import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-day1chars',
  template: `
  <div class="container">
  <ul  *ngFor="let Character of Characters" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect(Character)" >
          </abbr>
      </li>
  </ul>
  </div>
  `,
  styleUrls: ['day1chars.component.scss']
})
export class Day1charsComponent implements OnInit {
  public test = "Hello"
  
  public selectedId:number = 0;
  public Characters:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getDayCharacters(1).subscribe(data => this.Characters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }
}
