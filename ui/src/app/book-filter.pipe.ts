import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book'

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], titleTerm?:string, authorTerm?: string): Book[] {
    let result = books
    if( titleTerm !== undefined ){
        if( authorTerm !== undefined ){
          result = books.filter(book => book.title.toLowerCase().indexOf(titleTerm.toLowerCase()) !== -1 
          && book.author.toLowerCase().indexOf(authorTerm.toLowerCase()) !== -1 )
        } else {
          result = books.filter(book => book.title.toLowerCase().indexOf(titleTerm.toLowerCase()) !== -1)
        }
    }
    return result
  }

}
