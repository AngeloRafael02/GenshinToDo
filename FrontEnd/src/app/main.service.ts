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
    "http://localhost:3000/AllCharacters/All",
    "http://localhost:3000/AllCharacters/Mondstadt",
    "http://localhost:3000/AllCharacters/Liyue",
    "http://localhost:3000/AllCharacters/Inazuma",
  ];
  getAllCharacters(index:number):Observable<characterInterface[]>{
    return this.http.get<characterInterface[]>(this._ALLCharacterRoutes[index]);
  }; 
  private Day1CharacterRoutes:string[] =[
    "http://localhost:3000/Day1Characters/All",
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
    "http://localhost:3000/AllWeapons/all",
    "http://localhost:3000/AllWeapons/day1",
    "http://localhost:3000/AllWeapons/day2",
    "http://localhost:3000/AllWeapons/day3"
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

  private Day1WeaponRoutes:string[] = [
    "http://localhost:3000/Day1Weapons/All",
    "http://localhost:3000/Day1Weapons/Mondstadt",
    "http://localhost:3000/Day1Weapons/Liyue",
    "http://localhost:3000/Day1Weapons/Inazuma",
  ];
  getDay1Weapons(index:number){
    return this.http.get<weaponInterface[]>(this.Day1WeaponRoutes[index]);
  }

  private Day2WeaponRoutes:string[] = [
    "http://localhost:3000/Day2Weapons/All",
    "http://localhost:3000/Day2Weapons/Mondstadt",
    "http://localhost:3000/Day2Weapons/Liyue",
    "http://localhost:3000/Day2Weapons/Inazuma",
  ];
  getDay2Weapons(index:number){
    return this.http.get<weaponInterface[]>(this.Day2WeaponRoutes[index]);
  }

  private Day3WeaponRoutes:string[] = [
    "http://localhost:3000/Day3Weapons/All",
    "http://localhost:3000/Day3Weapons/Mondstadt",
    "http://localhost:3000/Day3Weapons/Liyue",
    "http://localhost:3000/Day3Weapons/Inazuma",
  ];
  getDay3Weapons(index:number){
    return this.http.get<weaponInterface[]>(this.Day3WeaponRoutes[index]);
  }
}