import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  show = false

  newBook: Book

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  back(){
    this.bookService.back()
  }
}
