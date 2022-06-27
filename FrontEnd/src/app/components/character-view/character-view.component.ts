import { Component, OnInit } from '@angular/core';
import { characterInterface } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-view',
  template:`
  <h4>Characters</h4>
  <nav class="row">
      <ul>
          <li><button (click)="showAll()" type="button" class="btn btn-outline-primary">Sunday</button></li>
          <li><button (click)="showDay1()" type="button" class="btn btn-outline-primary">Monday</button></li>
          <li><button (click)="showDay2()" type="button" class="btn btn-outline-primary">Tuesday</button></li>
          <li><button (click)="showDay3()" type="button" class="btn btn-outline-primary">Wednesday</button></li>
          <li><button (click)="showDay1()" type="button" class="btn btn-outline-primary">Thursday</button></li>
          <li><button (click)="showDay2()" type="button" class="btn btn-outline-primary">Friday</button></li>
          <li><button (click)="showDay3()" type="button" class="btn btn-outline-primary">Saturday</button></li>
      </ul>
  </nav>
  <div class="container">
    <div class="router">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styleUrls: ['character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  public selectedId:number = 0;

  constructor(
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
   //service: subscribe to the function calling Character Data

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

  showAll():void{
    this.router.navigate(['allchars'], {relativeTo:this.route})
  }
  showDay1(){
    this.router.navigate(['day1chars'], {relativeTo:this.route})
  }
  showDay2(){
    this.router.navigate(['day2chars'], {relativeTo:this.route})
  }
  showDay3(){
    this.router.navigate(['day3chars'], {relativeTo:this.route})
  }
}
