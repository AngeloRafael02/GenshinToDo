import { Component, OnInit } from '@angular/core';
import { characterInterface } from '../interfaces';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl:'character-view.component.html',
  styleUrls: ['character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  public selectedId:number = 0;
  public Characters:characterInterface[] = [];
  public day1Chars:characterInterface[] = [];
  public day2Chars:characterInterface[] = [];
  public day3Chars:characterInterface[] = [];

  constructor(
    private _mainService:MainService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
   //service: subscribe to the function calling Character Data
  this._mainService.getAllCharacters().subscribe(data => this.Characters = data);
  this._mainService.getDayCharacters(0).subscribe(data => this.day1Chars = data); //Monday or Thursday Chars
  this._mainService.getDayCharacters(1).subscribe(data => this.day2Chars = data); //Tuesday or Friday
  this._mainService.getDayCharacters(2).subscribe(data => this.day3Chars = data); //Wednesday or Saturday
  //gets id from URL using optional Route Parameters(using the URL as a variable/argument)
    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(Character:characterInterface):void{ //navigates to a route according to the id number of the character
    this.router.navigate(['/Characters', Character.id]);
  }

  wasSelected(Character:any):boolean{ //return true item was selected, procs a class bind of css styles
    return Character.id === this.selectedId
  }

  showAllCharacters():void{
    this.router.navigate(['allChars'], {relativeTo:this.route})
  }
  showDay1Characters(){
    this.router.navigate(['day1chars'], {relativeTo:this.route})
  }
  showDay2Characters(){
    this.router.navigate(['day2chars'], {relativeTo:this.route})
  }
  showDay3Characters(){
    this.router.navigate(['day3chars'], {relativeTo:this.route})
  }
}
