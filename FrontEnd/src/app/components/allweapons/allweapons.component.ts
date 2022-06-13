import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  selector: 'app-allweapons',
  template: `
  <div class="container">
  <ul  *ngFor="let Weapon of Weapons" >
      <li >
          <abbr title="{{ Weapon.name }}">
          <img class="WeaponPic" src="{{ Weapon.imgurl }}" alt="{{ Weapon.name }}" (click)="onSelect(Weapon)" >
          </abbr>
      </li>
  </ul>
  </div>
  `,
  styleUrls: ['allweapons.component.scss']
})
export class AllWeaponsComponent implements OnInit {

  public selectedID = 0;
  public Weapons:weaponInterface[] = [];

  constructor(
    private _weaponService:WeaponService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getAllWeapons().subscribe(data => this.Weapons = data)
  }
  onSelect(Weapon:weaponInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Weapons', Weapon.id]);
  }
}
