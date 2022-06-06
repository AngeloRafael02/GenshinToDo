import { Component, OnInit } from '@angular/core';
import { characterInterface } from '../interfaces';
import { MainService } from '../main.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-allchars',
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
  styleUrls: ['allchars.component.scss']
})
export class AllcharsComponent implements OnInit {

  public selectedId:number = 0;
  public Characters:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._mainService.getAllCharacters().subscribe(data => this.Characters = data);
  }
  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }

}
