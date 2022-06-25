
import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { characterInterface } from 'src/app/interfaces';
import { MainService } from 'src/app/main.service';


export class BaseCharacterClassComponent  {

  public Id:number = 0;
  public Characters:characterInterface[] = [];

  protected _mainService:MainService;
  protected router:Router;
  protected route:ActivatedRoute

  constructor(injector:Injector){
    this._mainService = injector.get(MainService);
    this.router = injector.get(Router)
    this.route = injector.get(ActivatedRoute)
  }
}
