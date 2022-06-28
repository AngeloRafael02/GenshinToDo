import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from '../../interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  selector: 'app-day3weapons',
  template: `
  <p>DANDELION GLADIATOR (Cecilia Garden, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of MondstadtWeapons; let i = index" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+1)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>AEROSIDERITE (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of LiyueWeapons; let i = index" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+20)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>MASK (Court of Flowing Sand, Inazuma)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of InazumaWeapons; let i = index" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+37)" >
          </abbr>
      </li>
  </ul>
  </div>`,
  styleUrls: ['day3weapons.component.scss']
})
export class Day3weaponsComponent extends BaseWeaponClassComponent implements OnInit {

  public MondstadtWeapons = super.Weapons;
  public LiyueWeapons = super.Weapons;
  public InazumaWeapons= super.Weapons;

  constructor(
   WeaponClassInjector:Injector
  ) {
    super(WeaponClassInjector)
   }

  ngOnInit(): void {
    this._weaponService.getDay3Weapons(1).subscribe(data => this.MondstadtWeapons = data);
    this._weaponService.getDay3Weapons(2).subscribe(data => this.LiyueWeapons = data);
    this._weaponService.getDay3Weapons(3).subscribe(data => this.InazumaWeapons = data);
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }
  onSelect2(index:number){  
    this.router.navigate(['/Weapons/day3weapons',index]);
  }

}
