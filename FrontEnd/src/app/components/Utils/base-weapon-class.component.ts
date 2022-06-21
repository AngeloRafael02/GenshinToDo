import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from 'src/app/interfaces';
import { WeaponService } from 'src/app/main.service';


export class BaseWeaponClassComponent  {

  public Id:number = 0;
  public Weapons:weaponInterface[] = [];

  protected _weaponService:WeaponService;
  protected router:Router;

  constructor(WeaponClassInjector:Injector){
    this._weaponService = WeaponClassInjector.get(WeaponService);
    this.router = WeaponClassInjector.get(Router)
  }
}