import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  FormControlName,
} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';
import { TodoapiService } from './../services/todoapiservice/todoapi.service';
import { TodoService } from './../services/todoservice/todo.service';
import { select, Store } from '@ngrx/store';
import { selectDataFromAPi, selectDeletedDataFromApi } from '../State/todo.selectors';
import { deleteTodoAction } from '../State/todo.action';
import { getTodoAction } from './../State/todo.action';

export interface Input {
  input: string;
  id: Guid;
  toggleSubmit: boolean;
}
export interface Input2 {
  input: string;
  id: Guid;
  toggleSubmit: boolean;
}
@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.page.html',
  styleUrls: ['./todoapp.page.scss'],
})
export class TodoappPage implements OnInit {
  user: Input[] = [];
  // loginForm = new FormGroup({
  //   input: new FormControl(''),
  // });
  // public todoService: TodoService;
  // newEditItem2: Input2 = { input: '', id: null, toggleSubmit: true }; //By Default
  apiDataFromStore$: any;
  constructor(
    public userapi: TodoapiService,
    public routerr: Router,
    public submitapi: TodoService,
    public store: Store
  ) {}

  ngOnInit() {
    this.submitapi.getApiData();
    // this.store.dispatch(getTodoAction());
    this.apiDataFromStore$ = this.store.select((selectDataFromAPi));
    // // eslint-disable-next-line no-underscore-dangle
    // // eslint-disable-next-line no-underscore-dangle
    // console.log('API-Data iterated from Store',this.apiDataFromStore$);
    // this.apiDataFromStore$ = this.store.select((selectDataFromAPi));
  }
  onDelete(id: Guid) {
    // this.submitapi.onDelete(id);
    this.store.dispatch(deleteTodoAction({todoId: id}));
    // this.apiDataFromStore$ = this.store.select((selectDataFromAPi));

  }
  onEdit(idd: Guid) {
    this.submitapi.onEdit(idd);
  }
  // Function of Reactive Forms
  onSubmit() {
    this.submitapi.onSubmit();
  }
  onRemove() {
    this.submitapi.onRemove();
  }
  // goBack(){
  //   this.routerr.navigate(['tabs/home']);
  //   }
}
