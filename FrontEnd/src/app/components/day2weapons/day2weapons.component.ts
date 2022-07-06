import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  templateUrl: '../../templates/weaponView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class Day2weaponsComponent extends BaseWeaponClassComponent implements OnInit {

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
    this.router.navigate(['/Weapons/day2weapons',Weapon.id])
  }
  onSelect2(index:number){  
    this.router.navigate(['/Weapons/day2weapons/',index]);
  }
}
