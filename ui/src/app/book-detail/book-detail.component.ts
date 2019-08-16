import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getBook(this.router.url.split('/').pop()) 
  }

  back(){
    this.bookService.back()
  }

  getBook(id: string){
    this.bookService.getBookById(id)
      .subscribe(
        book => this.book = book
      )
  }

  add(book: Book){
    this.bookService.add(book)
  }

  delete(id: string){
    this.bookService.delete(id).subscribe()
    this.back()
  }

}
