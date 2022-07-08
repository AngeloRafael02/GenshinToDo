import { Component, Injector, OnInit } from '@angular/core';
import { WeaponDetailsBase } from '../Utils/base-weapon-details.component';

@Component({
  templateUrl:'../../templates/weaponDetails.html',
  styleUrls: [`../../styles/CharacterAndWeaponDetails.scss`]
})
export class Day1WeaponDetailsComponent extends WeaponDetailsBase implements OnInit {

  public weapons = super.weapon
  public weaponNumber = super.Number

  constructor(
    Injector:Injector
  ) { super(Injector) }

  ngOnInit(): void {
    this.weaponNumber = this.route.snapshot.params['id']

    this._mainService.getDay1Weapons(0).subscribe(data => this.weapons= data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.weaponNumber = id - 1;
    });
  }

  back():void{
    this.router.navigate(['/Weapons/day1weapons']);
  }

  Send2Service(Material:string, Name:string, domain:string){
    super.sendItemToService(Material, Name, domain)
  }
}
