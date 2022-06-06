import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { characterInterface, weaponInterface } from './interfaces';

@Injectable({  providedIn: 'root'})
export class MainService {
  constructor(
    private http:HttpClient
  ) { }
  
  private _weaponDB_URL:string = "/assets/data/WeaponMockDB.json";
  getWeaponView():Observable<weaponInterface[]>{
    return this.http.get<weaponInterface[]>(this._weaponDB_URL);
  }

  private _CharacterRoutes:string[] = [
    "http://localhost:3000/Characters/all",
    "http://localhost:3000/Characters/day1",
    "http://localhost:3000/Characters/day2",
    "http://localhost:3000/Characters/day3"
  ];

  getAllCharacters():Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this._CharacterRoutes[0]);
  }; 
  getDayCharacters(number:number):Observable<characterInterface[]>{
    if(number > 4){
      return this.http.get<characterInterface[]>(this._CharacterRoutes[0]);
    } else{
      return this.http.get<characterInterface[]>(this._CharacterRoutes[number]);
    }
  };
}


@Injectable({  providedIn: 'root'})
export class WeaponService {
  constructor(
    private http:HttpClient
  ){};

  private _WeaponRoutes:string[] = [
    "http://localhost:3000/Weapons/all",
    "http://localhost:3000/Weapons/day1",
    "http://localhost:3000/Weapons/day2",
    "http://localhost:3000/Weapons/day3"
  ];

  getAllWeapons():Observable<weaponInterface[]>{
    return this.http.get<weaponInterface[]>(this._WeaponRoutes[0]);
  };
  getDaysWeapons(day:number){
    if (day > 4 ){ 
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[0]);
    } else {
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[day]);
    } 
  }
}