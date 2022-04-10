/* eslint-disable ngrx/on-function-explicit-return-type */
import { createReducer, on, Action } from '@ngrx/store';
import { Guid } from 'guid-typescript';
// eslint-disable-next-line max-len
import { getTodoAction, getTodoSuccessAction, getTodoFailureAction, deleteTodoAction, deleteTodoFailureAction, addTodoAction, addTodoSuccessAction, addTodoFailureAction, updateTodoAction, updateTodoSuccessAction, updateTodoFailureAction } from './todo.action';
import { ApiResponseInterface } from './../modelss/modelss.module';
import { Input } from './../todoapp/todoapp.page';
import { deleteTodoSuccessAction } from './todo.action';


// export interface TodoInterface {
//   todo: any;
// }

// export interface AppStateInterface {
//   apireducer: ApiStateInterface;
// }
// export interface ApiStateInterface{
//   loading: boolean;
//   error: string;
//   todo: ApiStateInterface[];
// }
const initialState ={
  loading: false,
  error: '',
  todo: null,
};
const apiReducer = createReducer(
  initialState,
  on(getTodoAction, (state) => ({
    ...state,
    loading: true,
  })
  ),
  on(getTodoSuccessAction, (state, w) => ({
    ...state,
    loading: false,
    todo: w.userr
  })),
  on(getTodoFailureAction, (state) => ({
    ...state,
    loading: false,
    error: 'Something went wrong',
  })),
  on(deleteTodoAction, (state) => ({
    ...state,
    loading: true,
  })
  ),
  on(deleteTodoSuccessAction, (state) => ({
    ...state,
    loading: false,
  })
  ),
  on(deleteTodoFailureAction, (state) => ({
    ...state,
    loading: false,
    error: 'Something went wrong',
  })
  ),
  on(addTodoAction, (state) => ({
    ...state,
    loading: true,
  })
  ),
  on(addTodoSuccessAction, (state) => ({
    ...state,
    loading: false,
  })
  ),
  on(addTodoFailureAction, (state) => ({
    ...state,
    loading: false,
    error: 'Something went wrong',
  })
  ),
  on(updateTodoAction, (state) => ({
    ...state,
    loading: true,
  })
  ),
  on(updateTodoSuccessAction, (state) => ({
    ...state,
    loading: false,
  })
  ),
  on(updateTodoFailureAction, (state) => ({
    ...state,
    loading: false,
    error: 'Something went wrong',
  })
  ),
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function apireducer(state: any, action: Action){
return apiReducer(state, action);
 }
