package netcracker.bookstore.service;

import java.util.List;

import netcracker.bookstore.dto.BookDTO;

public interface BookService {
    public List<BookDTO> findByTitle(String nameRegex);

    public BookDTO add(BookDTO book);
    public BookDTO update(String id, BookDTO book);
    public BookDTO getById(String id);
    public void deleteById(String id);
    public void delete(BookDTO book);
    
}