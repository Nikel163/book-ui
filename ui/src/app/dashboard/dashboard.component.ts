import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  books: Book[]
  filteredBooks: Book[]
  titleTerm: string
  authorTerm: string

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books
        this.filteredBooks = books
      }
    )
    
  }

  add(book: Book){
    this.bookService.addToCart(book)
  }

  triggerFilter(){
    delay(2000)
    this.filteredBooks = this.filterBooks()
  }

  filterBooks(): Book[]{
    this.filteredBooks = this.books
    if( this.titleTerm != undefined || this.titleTerm != null ){
        this.titleTerm = this.titleTerm.trim()
        if( this.authorTerm != undefined || this.authorTerm != null ){
          this.filteredBooks = this.books.filter(book => book.title.toLowerCase().indexOf(this.titleTerm.toLowerCase()) !== -1 
          && book.author.toLowerCase().indexOf(this.authorTerm.toLowerCase()) !== -1 )
        } else {
          this.filteredBooks = this.books.filter(book => book.title.toLowerCase().indexOf(this.titleTerm.toLowerCase()) !== -1)
        }
    }
    return this.filteredBooks
  }

}
