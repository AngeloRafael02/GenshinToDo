import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { characterInterface } from '../../interfaces';
import { MainService,ToDoService } from '../../main.service';

@Component({
  selector: 'app-character-details',
  template: `
  <h4>Characters</h4>
  <button class="btn btn-secondary" (click)="prev()">PREV</button> <button class="btn btn-secondary" (click)="back()">BACK</button> <button class="btn btn-secondary" (click)="next()">NEXT</button> <br>
  <div class="row">
  <div class="col-2">
    <img class="CharItem" src="{{ content[charNumber].imgurl }}" alt="{{ content[charNumber].name }}">
  </div>
  <div class="col-10">
    <p>Name: {{ content[charNumber].name | uppercase }} ({{content[charNumber].type}} user)</p>
    <p>Element: {{content[charNumber].element}}</p>
    <p>Region: {{ content[charNumber].region }}</p>
    <p>Talent Domain: {{ content[charNumber].domainname }}</p>
    <p>Talent Material: {{ content[charNumber].material }}</p>
    <p>Available Days: {{ content[charNumber].days }}</p>
    <button (click)="sendToService()" class="Add btn btn-secondary">Add Talent Material To List Input</button>
  </div>
  </div>
  `,
  styles: [`
  .CharItem{ max-width:160%; }
  p, .Add {margin-left:40px; margin-bottom:10px;}
  `]
})
export class CharacterDetailsComponent implements OnInit {

  public content:characterInterface[] = [];
  public charNumber:number = 0;

  constructor(
    private _mainService:MainService,
    public _toDoService:ToDoService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.charNumber = this.route.snapshot.params['id']

    this._mainService.getAllCharacters(0)
    .subscribe(data => this.content = data);

    this.route.paramMap.subscribe((params:any)=>{
      let id = parseInt(params.get('id'));
      this.charNumber = id-1; //-1 is an Offset because DB's index starts at 1
    });
  }
  
  prev():void{
    let prevId:number = this.charNumber - 1;
    if (prevId < 0) { prevId = 0; }
    this.router.navigate(['/Characters',prevId])
  }
  back():void{
    let backId = this.charNumber 
    this.router.navigate(['/Characters/allchars', {id:backId}]);
  }
  next():void{
    let nextId:number = this.charNumber + 2; // adjustment to help with the Offset
    this.router.navigate(["/Characters",nextId])
  }
  
  sendToService(){
    this._toDoService
      .testMethod(`Grind ${this.content[this.charNumber].material} for ${this.content[this.charNumber].name} from ${this.content[this.charNumber].domainname} (${this.content[this.charNumber].region})`)
  }
}
