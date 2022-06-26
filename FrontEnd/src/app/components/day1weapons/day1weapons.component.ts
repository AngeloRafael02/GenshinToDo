import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from '../../interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  selector: 'app-day1weapons',
  template: `
  <p>DECARABIAN (Cecilia Garden, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of MondstadtWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+1)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>GUYUN (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of LiyueWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+18)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>DISTANT SEA (Court of Flowing Sand, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of InazumaWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+34)" >
          </abbr>
      </li>
  </ul>
  </div>`,
  styleUrls: ['./day1weapons.component.scss']
})
export class Day1weaponsComponent extends BaseWeaponClassComponent implements OnInit {

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
    this._weaponService.getDay1Weapons(1).subscribe(data => this.MondstadtWeapons = data)
    this._weaponService.getDay1Weapons(2).subscribe(data => this.LiyueWeapons = data);
    this._weaponService.getDay1Weapons(3).subscribe(data => this.InazumaWeapons = data);
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons/day1weapons',Weapon.id])
  }
  onSelect2(index:number){  
    this.router.navigate(['/Weapons/day1weapons',index]);
  }

}
