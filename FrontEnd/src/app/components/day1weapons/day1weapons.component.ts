import { Component, Injector, OnInit } from '@angular/core';
import { weaponInterface } from 'src/app/interfaces';
import { BaseWeaponClassComponent } from '../Utils/base-weapon-class.component';

@Component({
  templateUrl: '../../templates/CharacterAndWeaponView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class Day1weaponsComponent extends BaseWeaponClassComponent implements OnInit {

  public MondstadtDomain = super.MondstadtDM()
  public LiyueDomain = super.LiyueDM()
  public InazumaDomain = super.InazumaDM()

  public Mondstadt = super.Weapons;
  public Liyue = super.Weapons;
  public Inazuma = super.Weapons;

  constructor(WeaponClassInjector:Injector) {
    super(WeaponClassInjector)
  }

  ngOnInit(): void {
    this._weaponService.getDay1Weapons(1).subscribe(data => this.Mondstadt = data)
    this._weaponService.getDay1Weapons(2).subscribe(data => this.Liyue = data);
    this._weaponService.getDay1Weapons(3).subscribe(data => this.Inazuma = data);
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons/day1weapons',Weapon.id])
  }

}
