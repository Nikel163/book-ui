import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book

  constructor(private bookService: BookService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => this.getBook(params.get('id'))) 
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
    this.bookService.addToCart(book)
  }

  delete(id: string){
    this.bookService.delete(id).subscribe()
  }

}
