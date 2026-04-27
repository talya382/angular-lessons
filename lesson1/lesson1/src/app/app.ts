import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Id } from "./id/id";

@Component({
  selector: 'app-root',
  imports: [Id],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
title = 'lesson1';
}
