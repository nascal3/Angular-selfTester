import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from '../06-services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import {from, Observable, of} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', () => {
    const todos = {'one': 1, 'two': 2};
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    fixture.detectChanges();
    expect(component.todos).toBe(todos);
  });
});
