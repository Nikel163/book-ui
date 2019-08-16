import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Book[]

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getSelectedBooks()
  }

  back(){
    this.bookService.back()
  }

  remove(book: Book){
    this.bookService.remove(book)
    this.books = this.bookService.getSelectedBooks()
  }

  clear(){
    this.bookService.clear()
    this.books = this.bookService.getSelectedBooks()
  }

  confirm(){
    this.clear()
    alert('You bought books! Congratulations!')
  }
}
