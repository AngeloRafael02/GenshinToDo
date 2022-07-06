import { Component, Injector, OnInit } from '@angular/core';
import { WeaponDetailsBase } from '../Utils/base-weapon-details.component';

@Component({
  templateUrl:'../../templates/weaponDetails.html',
  styleUrls: [`../../styles/CharacterAndWeaponDetails.scss`]
})
export class WeaponDetailsComponent extends WeaponDetailsBase implements OnInit {

  public weapons = super.weapon
  public weaponNumber = super.Number

  constructor(
    Injector:Injector
  ) { super(Injector) }

  ngOnInit(): void {
    this.weaponNumber = this.route.snapshot.params['id']

    this._mainService.getAllWeapons()
    .subscribe(data => this.weapons = data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.weaponNumber = id - 1;
    });
  }

  prev():void{
    let prevId:number = this.weaponNumber - 1;
    if (prevId < 0) { prevId = 0; }
    this.router.navigate(['/Weapons/allweapons',prevId])
  }
  back():void{
    this.router.navigate(['/Weapons/allweapons']);
  }
  next():void{
    let nextId:number = this.weaponNumber + 2;
    this.router.navigate(["/Weapons/allweapons",nextId])
  }

  Send2Service(Material:string, Name:string, domain:string){
    super.sendItemToService(Material, Name, domain)
  }
}
