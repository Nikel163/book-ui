import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book = {
    id: '5d525a001e04cd3c442f243d',
    title: 'Beginning Programming with Java For Dummies (For Dummies (Computer/Tech))',
    author: 'Katherine Sierra, Bert Bates',
    publisher: "O'Reilly Media",
    isbn: '978-0596009205',
    language: 'English',
    description: "It has taken four years, but with Head First Java the introductory Java book category has finally come of age. This is an excellent book, far more capable than any of the scores of Java-for-novices books that have come before it.\n\nKathy Sierra and Bert Bates deserve rich kudos--and big sales--for developing this book's new way of teaching the Java programming language, because any reader with even a little bit of discipline will come away with true understanding of how the language works.\n\nPerhaps best of all, this is no protracted \"Hello, World\" introductory guide. Readers get substantial exposure to object-oriented design and implementation, serialization, network programming, threads, and Remote Method Invocation (RMI)",
    year: 2005,
    pagesAmount: 688,
    weight: 1315,
    price: 33.58
  }

  constructor() { }

  ngOnInit() {
  }

}
