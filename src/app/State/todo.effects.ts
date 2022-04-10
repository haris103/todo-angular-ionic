/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getTodoAction,
  getTodoSuccessAction,
  getTodoFailureAction,
  deleteTodoAction,
  deleteTodoSuccessAction,
  deleteTodoFailureAction,
  addTodoAction,
  addTodoSuccessAction,
  addTodoFailureAction,
  updateTodoAction,
  updateTodoSuccessAction,
  updateTodoFailureAction,
} from './todo.action';
import { TodoapiService } from './../services/todoapiservice/todoapi.service';
import { ApiResponseInterface } from './../modelss/modelss.module';
import { Input } from './../todoapp/todoapp.page';
import { Guid } from 'guid-typescript';
import { TodoService } from './../services/todoservice/todo.service';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  switchMapTo,
} from 'rxjs/operators';
import { TodoActionTypes } from './todo.types';
import { of } from 'rxjs';
// import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class ApiEffects {
  public getApi = createEffect(() =>
    // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
    this.action.pipe(
      ofType(getTodoAction),
      // eslint-disable-next-line arrow-body-style
      mergeMap(() => {
        return this.todoService.getTodos().pipe(
          map((userr)=>  {
            console.log('ttt', userr);
            return  getTodoSuccessAction({userr});
        }),
          catchError(()=> of(getTodoFailureAction))
        );

        // return this.todoApiService.getData().then((user: ApiResponseInterface[]) => {
        //     console.log('sssssss', user);
        //     const userr: Input[] = [];
        //     const it = user[Symbol.iterator]();
        //     //    console.log('www',it.next());
        //     // console.log('eee', it.next().value);
        //     let iteration = it.next();
        //     while (!iteration.done) {
        //       // console.log('Iterated Value',iteration.value);
        //       userr.push({
        //         input: iteration.value.name,
        //         id: Guid.create(),
        //         toggleSubmit: true,
        //       });
        //       iteration = it.next();
        //       // console.log('Data from API', user);
        //     }
        //     console.log('ttt', userr);
        //     return getTodoSuccessAction({ userr });
        //   })
        //   .catch(() => getTodoFailureAction());
      })
    )
  );
  public deleteApi = createEffect(() =>
    this.action.pipe(
      ofType(deleteTodoAction),
      // eslint-disable-next-line arrow-body-style
      mergeMap( (action) => {
        return this.todoService
          .onDelete(action.todoId)
          .then(() => {
            return deleteTodoSuccessAction();
          }
            // eslint-disable-next-line arrow-body-style
          ).catch(() => {
            return deleteTodoFailureAction();
          });
      })
    )
  );
  public addApi = createEffect(() =>
    this.action.pipe(
      ofType(addTodoAction),
      // eslint-disable-next-line arrow-body-style
      mergeMap( () => {
        return this.todoService
        .onSubmit()
        .then(() => {
            return addTodoSuccessAction();
          }
            // eslint-disable-next-line arrow-body-style
          ).catch(() => {
            return addTodoFailureAction();
          });
      })
    )
  );

  public updateApi = createEffect(() =>
  this.action.pipe(
    ofType(updateTodoAction),
    // eslint-disable-next-line arrow-body-style
    mergeMap( (action) => {
      return this.todoService
      .onEdit(action.updateId)
      .then(() => {
          return updateTodoSuccessAction();
        }
          // eslint-disable-next-line arrow-body-style
        ).catch(() => {
          return updateTodoFailureAction();
        });
    })
  )
);


  constructor(
    public action: Actions,
    public todoApiService: TodoapiService,
    public todoService: TodoService
  ) {}
}
