import { Component, Injector, OnInit } from '@angular/core';
import { characterInterface } from '../../interfaces';
import { MainService } from '../../main.service';
import { Router } from '@angular/router';
import { BaseCharacterClassComponent } from '../Utils/base-character-class.component';

@Component({
  selector: 'app-allchars',
  template: `
  <p>ALL TALENT BOOKS (Forsaken Rift, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Character of MondstadtCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+1)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>ALL TALENT BOOKS (Taishan Mansion, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Character of LiyueCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+21)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>ALL TALENT BOOKS (Violet Court, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Character of InazumaCharacters; let i = index" >
      <li >
          <abbr title="{{Character.name}}">
          <img class="CharItem" src="{{Character.imgurl}}" alt="{{Character.name}}" (click)="onSelect2(i+38)" >
          </abbr>
      </li>
  </ul>
  </div>`,
  styleUrls: ['allchars.component.scss']
})
export class AllcharsComponent extends BaseCharacterClassComponent implements OnInit {


  public MondstadtCharacters = super.Characters;
  public LiyueCharacters = super.Characters;
  public InazumaCharacters = super.Characters;
  
  constructor(injector:Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this._mainService.getAllCharacters(1).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getAllCharacters(2).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getAllCharacters(3).subscribe(data => this.InazumaCharacters = data);
  }

  onSelect2(index:number){  
    this.router.navigate(['Characters/allchars',index]);
  }
}
