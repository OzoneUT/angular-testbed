import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors-content',
  templateUrl: './authors-content.component.html',
  styleUrls: ['./authors-content.component.css']
})
export class AuthorsContentComponent implements OnInit {

  constructor(public authorsService: AuthorsService) { 
    authorsService.getAuthors().length
  }

  ngOnInit(): void {
  }

}
