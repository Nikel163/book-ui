import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Book } from "./book";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  counter = 0 
  defUrl = "http://localhost:8080/api/v1/bookstore/book"

  selectedBooks: Book[] = []

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private location: Location
  ) { }

  getBooks(titleTerm: string, authorTerm: string, config:any): Observable<any> {
    let url = this.defUrl + `?&size=${config.itemsPerPage}&page=${config.currentPage}`;

    if((titleTerm != undefined || titleTerm != null ) && (authorTerm != undefined || authorTerm != null )){
      titleTerm = titleTerm.trim()
      authorTerm = authorTerm.trim()
      url += `&author=${authorTerm}&title=${titleTerm}`
    } else {
      if(titleTerm != undefined || titleTerm != null ){
        titleTerm = titleTerm.trim()
        url += `&title=${titleTerm}`         
      } else {
        if(authorTerm != undefined || authorTerm != null ){
          authorTerm = authorTerm.trim()
          url += `&author=${authorTerm}`         
        }
      }  
    }  
  

    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('getBooks', []))
      )
  }

  getBookById(id: string): Observable<Book>{
    const url = `${this.defUrl}/${id}`
    return this.http.get<Book>(url)
      .pipe(
        catchError(this.handleError<Book>('getBookById'))
      )
  }

  delete(id: string): Observable<void>{
    const url = `${this.defUrl}/delete/${id}`
    return this.http.delete<void>(url, this.httpOptions)
      .pipe(catchError(this.handleError<void>('deleteBook')))
  }

  add(book: Book){
    const url = `${this.defUrl}/add`
    return this.http.post(url, book)
      .pipe(catchError(this.handleError('addBook')))
  }

  getSelectedBooks(): Book[] {
    return this.selectedBooks
  }

  addToCart(book: Book){
    this.counter++
    this.selectedBooks.push(book)
  }

  clear(){
    this.counter = 0
    this.selectedBooks = []
  }

  remove(book: Book){
    for(var i = 0; i < this.selectedBooks.length; i++){
      if(this.selectedBooks[i] === book){
        this.selectedBooks.splice(i,1)
        this.counter--
        break
      }
    }
  }

  back(){
    this.location.back()
  }

  private handleError<T> (operation = 'operation', result ? : T){
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
