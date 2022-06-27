import { Component, Injector, OnInit } from '@angular/core';
import { WeaponDetailsBase } from '../Utils/base-weapon-details.component';

@Component({
  selector: 'app-weapon-details',
  template:`
  <h4>Weapons</h4>
  <button (click)="prev()" class="btn btn-secondary">PREV</button>
  <button (click)="back()" class="btn btn-secondary">BACK</button> 
  <button (click)="next()" class="btn btn-secondary">NEXT</button> <br>
  <div class="row">
  <div class="col-2">
  <img class="WeaponItem" src="{{ weapons[weaponNumber].imgurl }}" alt="{{ weapons[weaponNumber].name }}">
  </div>  
  <div class="col-10">
    <p>Name: {{ weapons[weaponNumber].name | uppercase }} ({{weapons[weaponNumber].type}} user)</p>  
    <p>Second Stat: {{weapons[weaponNumber].stat}} </p>
    <p>Domain: {{weapons[weaponNumber].domainname}}</p>
    <p>Ascend Material: {{weapons[weaponNumber].material}}</p>
    <p>Ascend Days: {{weapons[weaponNumber].days}}</p>
    <button (click)="Send2Service(weapons[weaponNumber].material, weapons[weaponNumber].name , weapons[weaponNumber].domainname)" class="btn btn-secondary">Add Talent Material To List Input</button>
  </div>
  </div>`,
  styles: [`
  .WeaponItem{ max-width:160%; }
  p{ margin-left:40px; }`]
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
