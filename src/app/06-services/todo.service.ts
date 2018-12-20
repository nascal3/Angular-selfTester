import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get('...');
  }

  add(newTodo) {
    return this.http.post('...', newTodo);
  }

  delete(id) {
    return this.http.delete('...');
  }
}
