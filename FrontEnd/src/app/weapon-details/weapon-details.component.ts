import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { weaponInterface } from '../interfaces';
import { WeaponService } from '../main.service';

@Component({
  selector: 'app-weapon-details',
  template:`
  <p>WEAPONS</p>
  <button (click)="prev()">PREV</button> <button (click)="back()">BACK</button> <button (click)="next()">NEXT</button>
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
  </div>
  </div>`,
  styles: [`
  .WeaponItem{ max-width:160%; }
  p{ margin-left:40px; }`]
})
export class WeaponDetailsComponent implements OnInit {

  public weapons:weaponInterface[] = [];
  public weaponNumber:number = 0; 

  constructor(
    private _mainService:WeaponService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

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
    this.router.navigate(['/Weapons',prevId])
  }
  back():void{
    let backId = this.weaponNumber 
    this.router.navigate(['/Weapons', {id:backId}]);
  }
  next():void{
    let nextId:number = this.weaponNumber + 2;
    this.router.navigate(["/Weapons",nextId])
  }

}
