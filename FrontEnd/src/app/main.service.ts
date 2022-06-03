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
    "http://localhost:3000/Characters",
    "http://localhost:3000/Characters/Monday",
    "http://localhost:3000/Characters/Tuesday",
    "http://localhost:3000/Characters/Wednesday",
    "http://localhost:3000/Characters/Thursday",
    "http://localhost:3000/Characters/Friday",
    "http://localhost:3000/Characters/Saturday"
  ];

  getAllCharacters():Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this._CharacterRoutes[0]);
  }; 
  getDayCharacters(day:number):Observable<characterInterface[]>{
    if (day == 1){ //Monday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[1]);
    } else if (day == 2){ //Tuesday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[2]);
    } else if (day == 3){ //Wednesday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[3]);
    } else if (day == 4){ //Thursday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[4]);
    } else if (day == 5){ //Friday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[5]);
    } else if (day == 6){ //Saturday
      return this.http.get<characterInterface[]>(this._CharacterRoutes[6]);
    } else {
      return this.http.get<characterInterface[]>(this._CharacterRoutes[0]);
    }
  };

}

@Injectable({  providedIn: 'root'})
export class WeaponService {
  
  constructor(
    private http:HttpClient
  ){};

  private _WeaponRoutes:string[] = [
    "http://localhost:3000/Weapons",
    "http://localhost:3000/Weapons/Monday",
    "http://localhost:3000/Weapons/Tuesday",
    "http://localhost:3000/Weapons/Wednesday",
    "http://localhost:3000/Weapons/Thursday",
    "http://localhost:3000/Weapons/Friday",
    "http://localhost:3000/Weapons/Saturday",
  ];

  getAllWeapons():Observable<weaponInterface[]>{
    return this.http.get<weaponInterface[]>(this._WeaponRoutes[0]);
  };
  getDaysWeapons(day:number){
    if (day == 1){ //Monday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[1]);
    } else if (day == 2){ //Tuesday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[2]);
    } else if (day == 3){ //Wednesday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[3]);
    } else if (day == 4){ //Thursday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[4]);
    } else if (day == 5){ //Friday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[5]);
    } else if (day == 6){ //Saturday
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[6]);
    } else {
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[0]);
    }
  }
}