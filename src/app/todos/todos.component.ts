import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';
import { environment } from '../../environments/environment';
import { TestService } from '../../Services/test.service';
import { DraggableComponent } from '../Components/draggable/draggable.component';
import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

const client = generateClient<Schema>();

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, DraggableComponent, CdkDropList],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  constructor(private test:TestService) {}
  ngOnInit(): void {
    this.listTodos();
    this.test.test().subscribe((res) => console.log(res))
  }

  drop(event: CdkDragDrop<string[]>) {
    
  }

  listTodos() {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.todos = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  createTodo() {
    try {
      client.models.Todo.create({
        content: window.prompt('Todo content'),
      });
      this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }
}
