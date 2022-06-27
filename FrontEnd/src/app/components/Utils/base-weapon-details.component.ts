import { Injector } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { weaponInterface } from "src/app/interfaces";
import { ToDoService, WeaponService } from "src/app/main.service";

export class WeaponDetailsBase {
    
    public weapon:weaponInterface[]=[];
    public Number:number = 0;

    protected _mainService:WeaponService;
    protected _toDoService:ToDoService;
    protected route:ActivatedRoute;
    protected router:Router;

    constructor(WeaponDetailsInjector:Injector){
        this._mainService = WeaponDetailsInjector.get(WeaponService);
        this._toDoService = WeaponDetailsInjector.get(ToDoService);
        this.route = WeaponDetailsInjector.get(ActivatedRoute);
        this.router = WeaponDetailsInjector.get(Router);
    }

    sendItemToService(Material:string, Name:string, domain:string){
        this._toDoService.testMethod(`Grind ${Material} for ${Name} from ${domain}`)
    }
}           