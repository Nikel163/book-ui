import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup
  show = false
  book = new Book()

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) { 
    this.createForm()
  }

  createForm(){
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      isbn: ['', Validators.required],
      language: ['', Validators.required],
      description: ['', Validators.required],
      year: ['', Validators.required],
      pagesAmount: ['', Validators.required],
      weight: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  back(){
    this.bookService.back()
  }

  onSubmit(){
    this.book.title = this.addForm.value.title
    this.book.author = this.addForm.value.author
    this.book.publisher = this.addForm.value.publisher
    this.book.isbn  = this.addForm.value.isbn 
    this.book.language = this.addForm.value.language
    this.book.description = this.addForm.value.description
    this.book.year = this.addForm.value.year
    this.book.pagesAmount = this.addForm.value.pagesAmount
    this.book.weight = this.addForm.value.weight
    this.book.price = this.addForm.value.price
    this.bookService.add(this.book).subscribe((data) => {})
  }

}
