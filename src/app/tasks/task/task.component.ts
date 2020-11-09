import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { Status } from 'src/app/models/status.enum';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Note; // {name: string, status: string};
  @Input() id: number;

  toDo: Status = Status.ToDo;
  inProgress: Status = Status.InProgress;
  done: Status = Status.Done;

  constructor(private noteService: NoteService) {
    noteService.statusUpdated.subscribe((status: Status) => {
      // console.log('New Status: ' + status);
    });
  }

  ngOnInit(): void {
  }

  onSetStatusTo(status: Status): void {
    this.noteService.updateNote(this.id, status);
    this.noteService.statusUpdated.emit(status);
  }

  getFormattedDate(date: Date): string {
    return date ? date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() : '';
  }
}
