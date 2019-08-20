import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = "Trevor Umpalumpa"

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

}
