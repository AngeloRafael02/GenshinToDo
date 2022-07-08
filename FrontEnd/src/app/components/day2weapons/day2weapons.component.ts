import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  templateUrl: '../../templates/CharacterAndWeaponView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class Day2weaponsComponent extends BaseWeaponClassComponent implements OnInit {

  public MondstadtDomain = super.MondstadtDM()
  public LiyueDomain = super.LiyueDM()
  public InazumaDomain = super.InazumaDM()

  public Mondstadt= super.Weapons;
  public Liyue = super.Weapons;
  public Inazuma = super.Weapons;

  constructor(Injector:Injector) {
     super(Injector)
  }

  ngOnInit(): void {
    this._weaponService.getDay2Weapons(1).subscribe(data => this.Mondstadt = data)
    this._weaponService.getDay2Weapons(2).subscribe(data => this.Liyue = data)
    this._weaponService.getDay2Weapons(3).subscribe(data => this.Inazuma = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons/day2weapons',Weapon.id])
  }
}
