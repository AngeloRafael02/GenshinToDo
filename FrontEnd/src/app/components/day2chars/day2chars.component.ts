import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-day2chars',
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
  styleUrls: ['day2chars.component.scss'  ]
})
export class Day2charsComponent implements OnInit {

  public selectedId:number = 0;
  public Characters:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getDayCharacters(2).subscribe(data => this.Characters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }
}
