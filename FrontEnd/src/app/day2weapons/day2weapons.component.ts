import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from '../interfaces';
import { WeaponService } from '../main.service';

@Component({
  selector: 'app-day2weapons',
  template: `
  <ul *ngFor="let Weapon of Weapons">
    <li (click)="onSelect(Weapon)">{{Weapon.name}}</li>
  </ul>`,
  styleUrls: ['./day2weapons.component.scss']
})
export class Day2weaponsComponent implements OnInit {

  public selectedId:number = 0;
  public Weapons:weaponInterface[]=[];

  constructor(
    private _weaponService:WeaponService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getDaysWeapons(2).subscribe(data => this.Weapons = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }

}
