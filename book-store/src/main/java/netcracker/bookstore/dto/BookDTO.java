package netcracker.bookstore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import netcracker.bookstore.entity.*;

@Data
@NoArgsConstructor
public class BookDTO {
    
    private String id;
    private String title;
    private String author;
    private String publisher;
    private String isbn;
    private String language;
    private String description;
    private int year;
    private int pagesAmount;
    private int weight;
    private double price;

    public BookDTO(BookEntity book){
        this.id = book.getId();
        this.title = book.getTitle();
        this.author = book.getAuthor();
        this.publisher = book.getPublisher();
        this.isbn = book.getIsbn();
        this.language = book.getLanguage();
        this.description = book.getDescription();
        this.year = book.getYear();
        this.pagesAmount = book.getPagesAmount();
        this.weight = book.getWeight();
        this.price = book.getPrice();
    } 
}