import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { characterInterface, weaponInterface } from './interfaces';


@Injectable({providedIn:'root'})
export class ToDoService{
  private MessageResult = new BehaviorSubject<string>(" ")

  testMethod(string:string){
    console.log(string)
    this.MessageResult.next(string)
  }

  AddToList(){
    console.log(this.MessageResult)
    return this.MessageResult.asObservable();
  }
}

@Injectable({  providedIn: 'root'})
export class MainService {
  constructor(
    private http:HttpClient
  ) { }

  private _ALLCharacterRoutes:string[] = [
    "http://localhost:3000/AllCharacters/",
    "http://localhost:3000/AllCharacters/Mondstadt",
    "http://localhost:3000/AllCharacters/Liyue",
    "http://localhost:3000/AllCharacters/Inazuma",
  ];
  getAllCharacters(index:number):Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this._ALLCharacterRoutes[index]);
  }; 
  private Day1CharacterRoutes:string[] =[
    "http://localhost:3000/Day1Characters/Mondstadt",
    "http://localhost:3000/Day1Characters/Liyue",
    "http://localhost:3000/Day1Characters/Inazuma",
  ];
  getDay1Characters(index:number):Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this.Day1CharacterRoutes[index]);
  };

  private Day2CharacterRoutes:string[] =[
    "http://localhost:3000/Day2Characters/Mondstadt",
    "http://localhost:3000/Day2Characters/Liyue",
    "http://localhost:3000/Day2Characters/Inazuma",
  ];
  getDay2Characters(index:number):Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this.Day2CharacterRoutes[index]);
  };

  private Day3CharacterRoutes:string[] =[
    "http://localhost:3000/Day3Characters/Mondstadt",
    "http://localhost:3000/Day3Characters/Liyue",
    "http://localhost:3000/Day3Characters/Inazuma",
  ];
  getDay3Characters(index:number):Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this.Day3CharacterRoutes[index]);
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
    if (day > 4){ 
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[0]);
    } else {
      return this.http.get<weaponInterface[]>(this._WeaponRoutes[day]);
    } 
  }
}