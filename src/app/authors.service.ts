import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authors: string[] = ['Ernest Hemmingway', 'Dr. Seuss', 'C.S. Lewis'];

  constructor() { }

  getAuthors(): string[] {
    return this.authors;
  }
}
