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
    this.filteredBooks = this.filterBooks()
  }

  filterBooks(): Book[]{
    this.filteredBooks = this.books
    if( this.titleTerm !== undefined ){
        if( this.authorTerm !== undefined ){
          this.filteredBooks = this.books.filter(book => book.title.toLowerCase().indexOf(this.titleTerm.toLowerCase()) !== -1 
          && book.author.toLowerCase().indexOf(this.authorTerm.toLowerCase()) !== -1 )
        } else {
          this.filteredBooks = this.books.filter(book => book.title.toLowerCase().indexOf(this.titleTerm.toLowerCase()) !== -1)
        }
    }
    return this.filteredBooks
  }

}
