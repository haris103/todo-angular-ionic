import { createAction, props, NotAllowedCheck, ActionCreatorProps } from '@ngrx/store';
import { TodoActionTypes } from './todo.types';
import { ApiResponseInterface } from './../modelss/modelss.module';
import { Input } from './../todoapp/todoapp.page';
import { Guid } from 'guid-typescript';

export const getTodoAction = createAction(
  TodoActionTypes.GET_TODO
);
export const getTodoSuccessAction =  createAction(
  TodoActionTypes.GET_TODO_SUCCESS,
  props<{userr: Input[]}>()
);
export const getTodoFailureAction = createAction(
  TodoActionTypes.GET_TODO_FAILURE,
);

export const deleteTodoAction= createAction(
  TodoActionTypes.DELETE_TODO,
  props<{todoId: Guid}>()
);
export const deleteTodoSuccessAction = createAction(
  TodoActionTypes.DELETE_TODO_SUCCESS,
  // props<{deletedUser: Input[]}>()
);
export const deleteTodoFailureAction = createAction(
  TodoActionTypes.DELETE_TODO_FAILURE,
);

export const addTodoAction= createAction(
  TodoActionTypes.ADD_TODO,
);
export const addTodoSuccessAction = createAction(
  TodoActionTypes.ADD_TODO_SUCCESS,
);
export const addTodoFailureAction = createAction(
  TodoActionTypes.ADD_TODO_FAILURE,
);

export const updateTodoAction= createAction(
  TodoActionTypes.UPDATE_TODO,
  props<{updateId: Guid}>()

);
export const updateTodoSuccessAction = createAction(
  TodoActionTypes.UPDATE_TODO_SUCCESS,
);
export const updateTodoFailureAction = createAction(
  TodoActionTypes.UPDATE_TODO_FAILURE,
);


