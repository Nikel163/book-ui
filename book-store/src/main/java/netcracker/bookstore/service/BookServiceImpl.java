package netcracker.bookstore.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.repository.support.PageableExecutionUtils;
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

    public Query buildQuery(String titleTerm, String authorTerm){
        Query query = new Query();
        if(!StringUtils.isEmpty(titleTerm) && !StringUtils.isEmpty(authorTerm)){
            query.addCriteria(Criteria.where("title").regex(titleTerm, "i"));
            query.addCriteria(Criteria.where("author").regex(authorTerm, "i"));
        } else {
            if(!StringUtils.isEmpty(titleTerm)){
                query.addCriteria(Criteria.where("title").regex(titleTerm, "i"));
            } else {
                if(!StringUtils.isEmpty(authorTerm)){
                    query.addCriteria(Criteria.where("author").regex(authorTerm, "i"));
                }
            }
        }
        return query;
    }

    @Override
    public Page<BookDTO> find(String titleTerm, String authorTerm, Pageable pageable) {
        Query query = buildQuery(titleTerm, authorTerm).with(pageable);
        List<BookDTO> list = mongoTemplate.find(query, BookEntity.class)
                .stream().map(BookDTO::new).collect(Collectors.toList());
        return PageableExecutionUtils.getPage(list, pageable, () -> count(titleTerm, authorTerm));               
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

    @Override
    public long count(String titleTerm, String authorTerm) {
        return mongoTemplate.count(buildQuery(titleTerm, authorTerm), BookEntity.class);
    }

    
}