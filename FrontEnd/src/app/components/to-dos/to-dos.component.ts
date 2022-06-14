import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { ToDoInterface } from 'src/app/interfaces';
import { ToDoService } from 'src/app/main.service';

@Component({
  selector: 'app-to-dos',
  template: `
  <div class="todos">
    <form (submit)="AddToDo()"  class="todo">
        <input type="text" class="todo-input" name="Input To Do" value="{{characterMessage}}." [(ngModel)]="inputToDo">
        <input type="submit" class="todo-submit" value="Add To do"  />
    </form>
    <div *ngFor="let todo of todos; let i = index;" class="todo {{todo.completed ? 'done' : ' ' }}" >
        <div class="id">{{i}}</div>
        <div class="content" (click)="toggleDone(i)">{{todo.content}}</div>
        <button class="delete" (click)="deleteToDo(i)">Delete</button>
    </div>
  </div>`,
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  public todos:ToDoInterface[] =[];
  public inputToDo:string = "";
  public characterMessage:string = "";

  constructor(private _ToDoService:ToDoService) { }
  ngOnInit(): void {
    this._ToDoService.AddToList().pipe(distinctUntilChanged()).subscribe((report:any)=>{ this. characterMessage = report  })
  }

  public toggleDone(id:number){
    this.todos.map((v,i)=>{
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  public deleteToDo(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  public AddToDo(){
    this.todos.push({
      content:this.inputToDo ? this.inputToDo : this.characterMessage,
      completed:false
    });
    this.inputToDo = "";
  }

}
