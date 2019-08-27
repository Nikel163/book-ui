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
  titleTerm: string
  authorTerm: string
  config = {
    itemsPerPage: 7,
    currentPage: 0,
    totalItems: 0
  }


  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBooks()
  }

  add(book: Book){
    this.bookService.addToCart(book)
  }

  triggerFilter(){
    this.getBooksDelayed()
  }

  getBooksDelayed(){
    this.bookService.getBooks(this.titleTerm, this.authorTerm, this.config)
      .pipe(delay(2000))
      .subscribe(
        data => {
          this.books = data.content
          this.config = {
            itemsPerPage: data.size,
            currentPage: data.number,
            totalItems: data.totalElements
          }
        }
      )     
  }

  getBooks(){
    this.bookService.getBooks(this.titleTerm, this.authorTerm, this.config).subscribe(
      data => {
        this.books = data.content
        this.config = {
          itemsPerPage: data.size,
          currentPage: data.number + 1,
          totalItems: data.totalElements
        }
      }
    )
  }

  pageChange(event){
    this.config.currentPage = event - 1
    this.getBooks()
  }

}
