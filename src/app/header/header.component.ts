import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return false;
  }

  login(): void {

  }

  logout(): void {

  }

}
