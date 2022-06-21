import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  selector: 'app-weapon-view',
  template: ` 
  <h4>Weapons</h4>
  <nav class="row">
    <ul>
        <li><button (click)="showAllWeapons()" type="button" class="btn btn-outline-primary">Sunday</button></li>
        <li><button (click)="showDay1Weapons()" type="button" class="btn btn-outline-primary">Monday</button></li>
        <li><button (click)="showDay2Weapons()" type="button" class="btn btn-outline-primary">Tuesday</button></li>
        <li><button (click)="showDay3Weapons()" type="button" class="btn btn-outline-primary">Wednesday</button></li>
        <li><button (click)="showDay1Weapons()" type="button" class="btn btn-outline-primary">Thursday</button></li>
        <li><button (click)="showDay2Weapons()" type="button" class="btn btn-outline-primary">Friday</button></li>
        <li><button (click)="showDay3Weapons()" type="button" class="btn btn-outline-primary">Saturday</button></li>
    </ul>
  </nav>
  <div class="container">
    <div class="router">
    <router-outlet></router-outlet>
    </div>
  </div>
`,
styleUrls: ['weapon-view.component.scss']
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

  showAllWeapons(){
    this.router.navigate(['allWeapons'],{relativeTo:this.route})
  }
  showDay1Weapons(){
    this.router.navigate(['day1weapons'],{relativeTo:this.route})
  }
  showDay2Weapons(){
    this.router.navigate(['day2weapons'],{relativeTo:this.route})
  }
  showDay3Weapons(){
    this.router.navigate(['day3weapons'],{relativeTo:this.route})
  }

}
