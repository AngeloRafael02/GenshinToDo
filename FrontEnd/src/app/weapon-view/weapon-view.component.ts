import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { weaponInterface } from '../interfaces';
import { WeaponService } from '../main.service';

@Component({
  selector: 'app-weapon-view',
  template: ` 
  <p>WEAPONS</p>
  <nav>
    <ul>
        <li><a href="">Sunday</a></li>
        <li><a href="">Monday</a></li>
        <li><a href="">Tuesday</a></li>
        <li><a href="">Wednesday</a></li>
        <li><a href="">Thursday</a></li>
        <li><a href="">Friday</a></li>
        <li><a href="">Saturday</a></li>
    </ul>
  </nav>
  <ul *ngFor="let Weapon of Weapons">
    <li (click)="onSelect(Weapon)" [class.selected]="wasSelected(Weapon)">{{Weapon.name}}</li>
  </ul>`,
  styles: [`
  li { display: inline; margin-right: 1rem; }
  `]
})
export class WeaponViewComponent implements OnInit {

  public Weapons:weaponInterface[] = [];
  public weaponNumber:number = 0;

  constructor(
    private _weaponService:WeaponService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._weaponService.getAllWeapons()
    .subscribe(data => this.Weapons = data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.weaponNumber = id;
    })
  }

  onSelect(Weapon:weaponInterface):void{
    this.router.navigate(['/Weapons',Weapon.id])
  }

  wasSelected(Weapon:any):boolean{
    return Weapon.id === this.weaponNumber
  }

}
