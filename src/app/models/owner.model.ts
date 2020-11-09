import { Note } from './note.model';

export interface Owner {
  username: string;
  notes: Note[];
}
