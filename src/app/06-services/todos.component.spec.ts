import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {from, of, throwError} from 'rxjs';

describe('TodosComponent', () => {
  // @ts-ignore
  const component: TodosComponent;
  // @ts-ignore
  const service: TodoService;

  beforeEach(() => {
    // @ts-ignore
    service = new TodoService(null);
    // @ts-ignore
    component = new TodosComponent(service);
  });

  it('should set todos properties with items returned from the server', () => {
    const todos = {'one': 1, 'two': 2};
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes then and the value into the object', function () {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return of('');
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add a new todo returned from the server', function () {
    const newTodo = {'id': 1};
    spyOn(service, 'add').and.returnValue(of(newTodo));

    component.add();

    expect(Object.keys(component.todos).length).toBeGreaterThanOrEqual(1);
  });

  it('should set error message property when server fails to add new todo', function () {
    const error = 'This is an error!';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo entry if use confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(of(''));

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should Not call the server to delete a todo entry if use cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(of(''));

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
