package netcracker.bookstore.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import netcracker.bookstore.dto.BookDTO;
import netcracker.bookstore.service.BookService;

@RestController
@RequestMapping("${api.prefix.v1}/book")
@Api(tags = "BookController")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    
    @GetMapping
    @ApiOperation("Get book list")
    public List<BookDTO> find(@RequestParam(required = false) String nameRegex){
        return bookService.findByTitle(nameRegex);
    }

    @GetMapping("/{id}")
    @ApiOperation("Get book")
    public BookDTO getById(@PathVariable("id") String id){
        return bookService.getById(id);
    }

    @PostMapping("/add")
    @ApiOperation("Add new book")
    public BookDTO add(@Valid @RequestBody BookDTO book){
        return bookService.add(book);
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation("Delete book by id")
    public void deleteById(@PathVariable("id") String id){
        bookService.deleteById(id);
    }


}