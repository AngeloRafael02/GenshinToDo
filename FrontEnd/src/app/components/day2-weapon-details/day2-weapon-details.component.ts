import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { weaponInterface } from 'src/app/interfaces';
import { ToDoService, WeaponService } from 'src/app/main.service';

@Component({
  selector: 'app-day2-weapon-details',
  template: `
  <h4>Weapons</h4>
  <button (click)="prev()" class="btn btn-secondary">PREV</button>
  <button (click)="back()" class="btn btn-secondary">BACK</button> 
  <button (click)="next()" class="btn btn-secondary">NEXT</button><br>
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
    <button (click)="sendToService()" class="btn btn-secondary">Add Talent Material To List Input</button>
  </div>
  </div>
  `,
  styles: [`
  .WeaponItem{ max-width:160%; }
  p{ margin-left:40px; }`]
})
export class Day2WeaponDetailsComponent implements OnInit {

  public weapons:weaponInterface[]=[];
  public weaponNumber:number = 0; 

  constructor(
    private _mainService:WeaponService,
    private _toDoService:ToDoService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.weaponNumber = this.route.snapshot.params['id']

    this._mainService.getDay2Weapons(0).subscribe(data => this.weapons= data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.weaponNumber = id - 1;
    });
  }

  prev():void{
    let prevId:number = this.weaponNumber - 1;
    if (prevId < 0) { prevId = 0; }
    this.router.navigate(['/Weapons/day2weapons',prevId])
  }
  back():void{
    this.router.navigate(['/Weapons/day2weapons']);
  }
  next():void{
    let nextId:number = this.weaponNumber + 2;
    this.router.navigate(["/Weapons/day2weapons",nextId])
  }

  sendToService(){
    this._toDoService
      .testMethod(`Grind ${this.weapons[this.weaponNumber].material} for ${this.weapons[this.weaponNumber].name} from ${this.weapons[this.weaponNumber].domainname}`)
  }
}
