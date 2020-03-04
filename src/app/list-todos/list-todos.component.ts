import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: 'Work Out' },
    { id: 2, description: 'Play Games'},
    { id: 3, description: 'Code'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
