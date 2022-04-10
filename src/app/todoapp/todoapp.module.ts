import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoappPageRoutingModule } from './todoapp-routing.module';

import { TodoappPage } from './todoapp.page';

import { StoreModule } from '@ngrx/store';
import { apireducer } from './../State/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from '../State/todo.effects';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TodoappPageRoutingModule,
    StoreModule.forFeature('apireducer', apireducer),
    EffectsModule.forFeature([ApiEffects]),
  ],
  declarations: [TodoappPage]
})
export class TodoappPageModule {}
