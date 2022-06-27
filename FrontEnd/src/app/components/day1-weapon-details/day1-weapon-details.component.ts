import { Component, Injector, OnInit } from '@angular/core';
import { WeaponDetailsBase } from '../Utils/base-weapon-details.component';

@Component({
  selector: 'app-day1-weapon-details',
  templateUrl:'../../templates/weaponDetails.html',
  styles: [`
  .WeaponItem{ max-width:160%; }
  p{ margin-left:40px; }`]
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

  prev():void{
    let prevId:number = this.weaponNumber - 1;
    if (prevId < 0) { prevId = 0; }
    this.router.navigate(['/Weapons/day1weapons',prevId])
  }
  back():void{
    this.router.navigate(['/Weapons/day1weapons']);
  }
  next():void{
    let nextId:number = this.weaponNumber + 2;
    this.router.navigate(["/Weapons/day1weapons",nextId])
  }

  Send2Service(Material:string, Name:string, domain:string){
    super.sendItemToService(Material, Name, domain)
  }
}
