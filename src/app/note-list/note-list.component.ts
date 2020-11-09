import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  getFormattedDate(date: Date): string {
    return date ? date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() : '';
  }

  onDelete(event: any): void {
    console.log(event);
  }

  onEdit(): void {

  }

}
