import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-to-dos',
  template: `
  <div class="todos">
    <form (submit)="AddToDo()"  class="todo">
        <input type="text" name="Input To Do" placeholder="Enter To Do"  [(ngModel)]="inputToDo">
        <input type="submit" value="Add To do"  />
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

  constructor() { }

  ngOnInit(): void {
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
      content:this.inputToDo,
      completed:false
    });
    this.inputToDo = "";
  }
}
