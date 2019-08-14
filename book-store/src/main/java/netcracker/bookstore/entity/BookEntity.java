package netcracker.bookstore.entity;

import javax.validation.constraints.NotNull;

import netcracker.bookstore.dto.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document("books")
public class BookEntity {

    @Id
    private String id;

    @Indexed
    private String title;

    @NotNull
    private String author;

    @NotNull
    private String publisher;

    @NotNull
    private String isbn;

    @NotNull
    private String language;

    private String description;
    private int year;
    private int pagesAmount;
    private int weight;
    private double price;
    
    public BookEntity(BookDTO book){
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