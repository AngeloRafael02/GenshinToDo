import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  templateUrl: '../../templates/CharacterAndWeaponView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class AllWeaponsComponent extends BaseWeaponClassComponent implements OnInit {

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
    this._weaponService.getAllDaysWeapons(1).subscribe(data => this.Mondstadt = data)
    this._weaponService.getAllDaysWeapons(2).subscribe(data => this.Liyue = data)
    this._weaponService.getAllDaysWeapons(3).subscribe(data => this.Inazuma = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons/day1weapons',Weapon.id])
  }

}
