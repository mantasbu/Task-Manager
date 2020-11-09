import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  @Input() valuesFromHome: any;

  note: Note = {
    body: '',
    owner: 'Mantas',
    title: ''
  };
  selectedImage: any;

  constructor(private noteService: NoteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addNote(): void {
    this.noteService.addNote(this.note.body, this.note.owner, this.note.title, this.selectedImage);
    this.router.navigate(['/tasks']);
  }

  onUploadImage(imageInput: any): void {
    const file = imageInput.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.selectedImage = event.target.result;
    };
  }
}
