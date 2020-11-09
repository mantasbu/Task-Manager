import { EventEmitter, Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { Status } from '../models/status.enum';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [
    {
      body: 'Tidy up the entire room',
      created: new Date(2020, 10, 3, 12, 15, 32),
      owner: 'Mantas',
      status: Status.ToDo,
      title: 'Tidy up',
    },
    {
      body: 'Clean up the entire room',
      created: new Date(2020, 10, 2, 11, 12, 44),
      owner: 'Saulius',
      status: Status.InProgress,
      title: 'Clean up',
      deleted: new Date(2020, 10, 2, 11, 12, 44),
      edited: new Date(2020, 10, 2, 11, 12, 44)
    },
  ];

  statusUpdated = new EventEmitter<Status>();

  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(body: string, owner: string, title: string, media: any): void {
    const newNote: Note = {
      body,
      created: new Date(),
      owner,
      status: Status.ToDo,
      title
    };

    if (media) {
      newNote.media = media;
    }

    this.notes.push(newNote);
  }

  updateNote(id: number, status: Status): void {
    this.notes[id].status = status;
  }
}
