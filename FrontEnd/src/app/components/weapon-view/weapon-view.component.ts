import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { weaponInterface } from '../../interfaces';
import { WeaponService } from '../../main.service';

@Component({
  templateUrl: `../../templates/CharacterAndWeaponMain.html`,
  styleUrls: [`../../styles/CharacterAndWeaponMain.scss`]
})
export class WeaponViewComponent implements OnInit {
  public title = "Weapons"
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
