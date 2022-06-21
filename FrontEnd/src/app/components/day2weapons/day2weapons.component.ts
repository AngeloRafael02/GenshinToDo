import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from '../../interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

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
export class Day2weaponsComponent extends BaseWeaponClassComponent implements OnInit {

  public selectedId = super.Id;
  public MondstadtWeapons = super.Weapons;
  public LiyueWeapons = super.Weapons;
  public InazumaWeapons= super.Weapons;

  constructor(
   WeaponClassInjector:Injector
  ) {
    super(WeaponClassInjector)
   }
   
  ngOnInit(): void {
    this._weaponService.getDay2Weapons(1).subscribe(data => this.MondstadtWeapons = data)
    this._weaponService.getDay2Weapons(2).subscribe(data => this.LiyueWeapons = data)
    this._weaponService.getDay2Weapons(3).subscribe(data => this.InazumaWeapons = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }

}
