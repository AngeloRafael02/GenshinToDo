import { Injector } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { characterInterface } from "src/app/interfaces";
import { MainService, ToDoService } from "src/app/main.service";


export class CharacterDetailsBase{
    public Character:characterInterface[]=[];
    public Number:number = 0;

    protected _mainService:MainService;
    protected _toDoService:ToDoService;
    protected route:ActivatedRoute;
    protected router:Router;

    constructor(CharacterDetailInjector:Injector){
        this._mainService = CharacterDetailInjector.get(MainService);
        this._toDoService = CharacterDetailInjector.get(ToDoService);
        this.route = CharacterDetailInjector.get(ActivatedRoute);
        this.router = CharacterDetailInjector.get(Router)
    }
}