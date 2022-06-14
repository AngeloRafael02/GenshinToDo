import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-day3chars',
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
  styleUrls: ['day3chars.component.scss']
})
export class Day3charsComponent implements OnInit {

  public selectedId:number = 0;
  public Characters:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getDay3Characters(0).subscribe(data => this.Characters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }

}
