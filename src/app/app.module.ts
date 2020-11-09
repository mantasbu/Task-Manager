import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HeaderComponent } from './header/header.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'add', component: NoteEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HeaderComponent,
    NoteEditComponent,
    ModalComponent,
    TasksComponent,
    TaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
