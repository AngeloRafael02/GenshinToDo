import { Component, Injector, OnInit } from '@angular/core';
import { CharacterDetailsBase } from '../Utils/base-character-detail.component';

@Component({
  templateUrl:'../../templates/characterDetails.html',
  styleUrls: ['../../styles/CharacterAndWeaponDetails.scss']
})
export class Day2CharacterDetailsComponent extends CharacterDetailsBase implements OnInit {

  public content = super.Character;
  public charNumber = super.Number;

  constructor(CharacterDetailInjector:Injector){
    super(CharacterDetailInjector)
  }

  ngOnInit(): void {
    this.charNumber = this.route.snapshot.params['id']

    this._mainService.getDay2Characters(0)
    .subscribe(data => this.content = data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.charNumber = id-1; //-1 is an Offset because DB's index starts at 1
    });
  }
  
  prev():void{
    let prevId:number = this.charNumber - 1;
    if (prevId < 0) { prevId = 0; }
    this.router.navigate(['/Characters/day2chars',prevId])
  }
  back():void{
    this.router.navigate(['/Characters/day2chars']);
  }
  next():void{
    let nextId:number = this.charNumber + 2; // adjustment to help with the Offset
    this.router.navigate(["/Characters/day2chars",nextId])
  }
  
  sendToService(){
    this._toDoService
      .testMethod(`Grind ${this.content[this.charNumber].material} for ${this.content[this.charNumber].name} from ${this.content[this.charNumber].domainname} (${this.content[this.charNumber].region})`)
  }
}
