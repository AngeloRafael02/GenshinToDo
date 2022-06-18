import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  selector: 'app-day2weapons',
  template: `
  <p>BOREAL WOLF (Cecilia Garden, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of MondstadtWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>MIST VEILED (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of LiyueWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>NARUKAMI (Court of Flowing Sand, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of InazumaWeapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>`,
  styleUrls: ['./day2weapons.component.scss']
})
export class Day2weaponsComponent implements OnInit {

  public selectedId:number = 0;
  public MondstadtWeapons:weaponInterface[]=[];
  public LiyueWeapons:weaponInterface[]=[];
  public InazumaWeapons:weaponInterface[]=[];

  constructor(
    private _weaponService:WeaponService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getDay2Weapons(1).subscribe(data => this.MondstadtWeapons = data)
    this._weaponService.getDay2Weapons(2).subscribe(data => this.LiyueWeapons = data)
    this._weaponService.getDay2Weapons(3).subscribe(data => this.InazumaWeapons = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }

}
