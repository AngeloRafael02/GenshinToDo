import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  selector: 'app-day3weapons',
  template: `
  <div class="container">
  <ul  *ngFor="let Weapon of Weapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>`,
  styleUrls: ['day3weapons.component.scss']
})
export class Day3weaponsComponent implements OnInit {

  public selectedId:number = 0;
  public Weapons:weaponInterface[]=[];

  constructor(
    private _weaponService:WeaponService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getDaysWeapons(3).subscribe(data => this.Weapons = data)
  }
  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }


}
