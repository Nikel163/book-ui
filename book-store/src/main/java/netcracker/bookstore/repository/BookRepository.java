package netcracker.bookstore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import netcracker.bookstore.entity.BookEntity;

public interface BookRepository extends MongoRepository<BookEntity, String> {

}