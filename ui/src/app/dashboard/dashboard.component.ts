import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  books: Book[]

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    )
  }

  add(book: Book){
    this.bookService.add(book)
  }

}
