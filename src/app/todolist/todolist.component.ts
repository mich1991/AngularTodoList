import { Component, } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title = 'TODO list';
  newTask: string = ''

  todos: Array<Todo> = [{
    title: 'zakupy',
    complete: true,
  }, {
    title: 'taniec',
    complete: false,
  }, {
    title: 'spiew',
    complete: false,
  }]

  addTask() {
    if (!this.newTask) {
      return;
    }
    const newTodo: Todo = {
      title: this.newTask,
      complete: false,
    }

    this.todos.push(newTodo)
    this.newTask = ''
  }

  deleteTask(index) {
    this.todos.splice(index, 1)
  }
}

interface Todo {
  title: string;
  complete: boolean;
}
