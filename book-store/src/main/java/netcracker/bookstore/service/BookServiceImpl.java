package netcracker.bookstore.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import lombok.RequiredArgsConstructor;
import netcracker.bookstore.dto.BookDTO;
import netcracker.bookstore.entity.BookEntity;
import netcracker.bookstore.exception.BookNotFoundException;
import netcracker.bookstore.repository.BookRepository;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final MongoTemplate mongoTemplate;

    public Query buildQuery(String nameRegex){
        Query query = new Query();
        if(!StringUtils.isEmpty(nameRegex)){
            query.addCriteria(Criteria.where("title").regex(nameRegex, "i"));
        }
        return query;
    }

    @Override
    public List<BookDTO> findByTitle(String nameRegex) {
        Query query = buildQuery(nameRegex);
        return mongoTemplate.find(query, BookEntity.class)
                .stream().map(BookDTO::new).collect(Collectors.toList());
    }

    @Override
    public BookDTO add(BookDTO book) {
        return new BookDTO(bookRepository.save(new BookEntity(book)));
    }

    @Override
    public BookDTO getById(String id) throws BookNotFoundException {
        return bookRepository.findById(id).map(BookDTO::new).orElseThrow(() -> new BookNotFoundException(id));
    }

    @Override
    public void deleteById(String id) {
        bookRepository.deleteById(id);
    }

	@Override
	public void delete(BookDTO book) {
		bookRepository.delete(new BookEntity(book));
	}

    
}