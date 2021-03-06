package netcracker.bookstore.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import netcracker.bookstore.dto.BookDTO;

public interface BookService {
    public Page<BookDTO> find(String title, String author, Pageable pageable);

    public long count(String titleTerm, String authorTerm);

    public BookDTO add(BookDTO book);
    public BookDTO getById(String id);
    public void deleteById(String id);
    public void delete(BookDTO book);
    
}