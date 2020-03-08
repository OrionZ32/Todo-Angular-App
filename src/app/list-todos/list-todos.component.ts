import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor (
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo (1, 'Work Out', false, new Date()),
    new Todo (2, 'Code', false, new Date()),
    new Todo (3, 'Play Games', false, new Date())
    // { id: 1, description: 'Work Out' },
    // { id: 2, description: 'Play Games'},
    // { id: 3, description: 'Code'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
