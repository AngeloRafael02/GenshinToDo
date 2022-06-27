import { Component, Injector, OnInit } from '@angular/core';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  selector: 'app-allweapons',
  template: `
  <p>All Materials (Cecilia Garden, Mondstadt)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of MondstadtWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+1)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>All Materials (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of LiyueWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+56)" >
          </abbr>
      </li>
  </ul>
  </div>
  <p>All Materials (Hidden Palace of Lianshan Formula, Liyue)</p>
  <div class="container">
  <ul  *ngFor="let Weapon of InazumaWeapons; let i = index;" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect2(i+106)" >
          </abbr>
      </li>
  </ul>
  </div>
 
  `,
  styleUrls: ['allweapons.component.scss']
})
export class AllWeaponsComponent extends BaseWeaponClassComponent implements OnInit {

  public selectedID = super.Id;
  public MondstadtWeapons = super.Weapons;
  public LiyueWeapons = super.Weapons;
  public InazumaWeapons = super.Weapons;

  constructor(WeaponClassInjector:Injector) {
     super(WeaponClassInjector)
  }

  ngOnInit(): void {
    this._weaponService.getAllDaysWeapons(1).subscribe(data => this.MondstadtWeapons = data)
    this._weaponService.getAllDaysWeapons(2).subscribe(data => this.LiyueWeapons = data)
    this._weaponService.getAllDaysWeapons(3).subscribe(data => this.InazumaWeapons = data)
  }

  onSelect2(index:number){  
    this.router.navigate(['/Weapons/allweapons',index]);
  }
}
