import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddEditTaskComponent} from "./task/add-edit-task/add-edit-task.component";
import {TaskListComponent} from "./task/task-list/task-list.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from "@angular/common/http";
import {taskReducer} from "./store/task/task.reducer";
import {TaskEffects} from  "./store/task/task.effects";

@NgModule({
  declarations: [
    AppComponent,
    AddEditTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: taskReducer}, {}),
    EffectsModule.forRoot([TaskEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [TaskListComponent]
})
export class AppModule { }
