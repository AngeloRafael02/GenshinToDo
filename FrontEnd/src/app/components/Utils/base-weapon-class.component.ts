import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { weaponInterface } from 'src/app/interfaces';
import { WeaponService } from 'src/app/main.service';


export class BaseWeaponClassComponent  {

  public MondstadtDM(){return "Cecilia Garden, Mondstadt"}
  public LiyueDM(){return "Hidden Palace of Lianshan Formula, Liyue"}
  public InazumaDM(){return "Court of Flowing Sand, Inazuma"}

  public Weapons:weaponInterface[] = [];

  protected _weaponService:WeaponService;
  protected router:Router;

  constructor(WeaponClassInjector:Injector){
    this._weaponService = WeaponClassInjector.get(WeaponService);
    this.router = WeaponClassInjector.get(Router)
  }
  
}