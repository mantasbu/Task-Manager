import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { Status } from '../models/status.enum';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Note[] = [];

  toDo: Note[];
  inProgress: Note[];
  done: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.tasks = this.noteService.getNotes();
    this.toDo = this.tasks.filter((task: Note) => task.status === Status.ToDo);
    this.inProgress = this.tasks.filter((task: Note) => task.status === Status.InProgress);
    this.done = this.tasks.filter((task: Note) => task.status === Status.Done);
  }
}
