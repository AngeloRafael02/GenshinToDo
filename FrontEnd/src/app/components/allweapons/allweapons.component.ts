import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  selector: 'app-allweapons',
  template: `
  <p>All Materials (Cecilia Garden, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of MondstadtWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>All Materials (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of LiyueWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>All Materials (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of InazumaWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
 
  `,
  styleUrls: ['allweapons.component.scss']
})
export class AllWeaponsComponent implements OnInit {

  public selectedID = 0;
  public MondstadtWeapons:weaponInterface[] = [];
  public LiyueWeapons:weaponInterface[]=[];
  public InazumaWeapons:weaponInterface[]=[];

  constructor(
    private _weaponService:WeaponService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getAllDaysWeapons(1).subscribe(data => this.MondstadtWeapons = data)
    this._weaponService.getAllDaysWeapons(2).subscribe(data => this.LiyueWeapons = data)
    this._weaponService.getAllDaysWeapons(3).subscribe(data => this.InazumaWeapons = data)
  }
  onSelect(Weapon:weaponInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Weapons/allweapons', Weapon.id]);
  }
}
