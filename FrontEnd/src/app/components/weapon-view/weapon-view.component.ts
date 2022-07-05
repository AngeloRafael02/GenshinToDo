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
        <li><button (click)="showAll()" type="button" class="btn btn-secondary">Sunday</button></li>
        <li><button (click)="showDay1()" type="button" class="btn btn-secondary">Monday</button></li>
        <li><button (click)="showDay2()" type="button" class="btn btn-secondary">Tuesday</button></li>
        <li><button (click)="showDay3()" type="button" class="btn btn-secondary">Wednesday</button></li>
        <li><button (click)="showDay1()" type="button" class="btn btn-secondary">Thursday</button></li>
        <li><button (click)="showDay2()" type="button" class="btn btn-secondary">Friday</button></li>
        <li><button (click)="showDay3()" type="button" class="btn btn-secondary">Saturday</button></li>
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

  showAll(){
    this.router.navigate(['allweapons'],{relativeTo:this.route})
  }
  showDay1(){
    this.router.navigate(['day1weapons'],{relativeTo:this.route})
  }
  showDay2(){
    this.router.navigate(['day2weapons'],{relativeTo:this.route})
  }
  showDay3(){
    this.router.navigate(['day3weapons'],{relativeTo:this.route})
  }

}
