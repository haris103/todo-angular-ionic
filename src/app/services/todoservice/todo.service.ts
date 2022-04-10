/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable ngrx/select-style */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { Input } from './../../todoapp/todoapp.page';
import { Input2 } from './../../todoapp/todoapp.page';
import { TodoapiService } from './../todoapiservice/todoapi.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { deleteTodoAction, getTodoAction } from './../../State/todo.action';
import { selectDataFromAPi } from 'src/app/State/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  loginForm = new FormGroup({
    input: new FormControl(''),
  });

  private user: Input[] = [];
  newEditItem2: Input2 = { input: '', id: null, toggleSubmit: true }; //By Default
  u: Input[] = [];
  // public apiDataFromStore$: Observable<any>;
  // apiDataFromStore$: Observable<Input[]>;
  apiDataFromStore$: any;

  constructor(public userapi: TodoapiService, public store: Store) {}

  getTodos(): Observable<Input[]> {
    // console.log('gggg', typeof(this.user));
    console.log('gggg', this.user);
    return of(this.user);
  }
  getData() {
    // console.log('gggg', typeof( this.apiDataFromStore$));
    return of(this.apiDataFromStore$);
  }

  async getApiData() {
    // console.log('nvelknrlkn', this.userapi.getData());
    try {
      const data = await this.userapi.getData();
      const it = data[Symbol.iterator]();
      // console.log('www',it.next());
      // console.log('eee', it.next().value);
      let iteration = it.next();
      while (!iteration.done) {
        // console.log('Iterated Value',iteration.value);
        this.user.push({
          input: iteration.value.name,
          id: Guid.create(),
          toggleSubmit: true,
        });
        iteration = it.next();
        console.log('Data from API', this.user);
      }
    } catch (error) {
      return console.log('ERROR IN API: ', error.message);
    }

    this.store.dispatch(getTodoAction());
    // this.apiDataFromStore$ = this.store.pipe(select(selectDataFromAPi));
    // // eslint-disable-next-line no-underscore-dangle
    // // eslint-disable-next-line no-underscore-dangle
    // console.log('API-Data iterated from Store',this.apiDataFromStore$);
  }

  async onSubmit() {
    console.log('Reactive Form', this.loginForm.value.input);

    if (!this.loginForm.value.input) {
      alert('Enter the valueeeeeee');
    } else if (this.loginForm.value.input && !this.newEditItem2.toggleSubmit) {
      this.user = this.user.map((data) => {
        if (data.id === this.newEditItem2.id) {
          return { ...data, input: this.loginForm.value.input };
        }
        return data;
      });
      console.log('Block A Called');
      this.loginForm.reset();
      this.newEditItem2 = { ...this.newEditItem2, toggleSubmit: true };
    } else if (this.loginForm.value.input && this.newEditItem2.toggleSubmit) {
      this.user = Object.assign([], this.user);
      // console.log(this.user);
      this.user.unshift({
            input: this.loginForm.value.input,
            id: Guid.create(),
            toggleSubmit: true,
          },
          );
      this.loginForm.get('input').reset(); // removing individual value
      console.log(this.user);
      console.log('Block B Called');
    }
    this.store.dispatch(getTodoAction());
  }
  async onDelete(id: Guid): Promise<void> {
    // console.log('ID is called',id);
    // const value = this.user.filter((i) => i.id === id)[0];
    // // console.log('Deleted Data',value);
    // const index = this.user.indexOf(value, 0);
    // if (index > -1) {
    //   this.user.splice(index, 1);
    // }
    this.user = this.user.filter((val) => val.id !== id);
    this.store.dispatch(getTodoAction());
  }
  async onEdit(idd: Guid) {
    // console.log('Edit-ID is:', idd);
    const newEditItem = this.user.find((i) => i.id === idd);
    this.newEditItem2 = { ...newEditItem, toggleSubmit: false };
    // console.log('New EditedItem', this.newEditItem2);
    this.loginForm.controls.input.setValue(this.newEditItem2.input);
    this.store.dispatch(getTodoAction());
  }
  onRemove() {
    this.user.splice(0);
  }
}
