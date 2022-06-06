import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { characterInterface } from '../interfaces';
import { MainService } from '../main.service';

@Component({
  selector: 'app-character-details',
  template: `
  <p>CHARACTERS</p>
  <button (click)="prev()">PREV</button> <button (click)="back()">BACK</button> <button (click)="next()">NEXT</button>
    <p>Name: {{ content[charNumber].name | uppercase }} ({{content[charNumber].type}} user)</p>
    <p>Element: {{content[charNumber].element}}</p>
    <p>Region: {{ content[charNumber].region }}</p>
    <p>Talent Domain: {{ content[charNumber].domainname }}</p>
    <p>Talent Material: {{ content[charNumber].material }}</p>
    <p>Available Days: {{ content[charNumber].days }}</p>
  `,
  styles: [``
  ]
})
export class CharacterDetailsComponent implements OnInit {

  public content:characterInterface[] = [];
  public charNumber:number = 0;

  constructor(
    private _mainService:MainService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.charNumber = this.route.snapshot.params['id']

    this._mainService.getAllCharacters()
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
    this.router.navigate(['/Characters', {id:backId}]);
  }
  next():void{
    let nextId:number = this.charNumber + 2; // adjustment to help with the Offset
    this.router.navigate(["/Characters",nextId])
  }
}
