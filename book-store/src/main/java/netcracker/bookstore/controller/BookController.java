package netcracker.bookstore.controller;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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
import io.swagger.annotations.ApiParam;
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
    public Page<BookDTO> find(@ApiParam("title") @RequestParam(value = "title", required = false) String titleTerm,
                              @ApiParam("author") @RequestParam(value = "author", required = false) String authorTerm,  
                              @PageableDefault(sort = {"title"}, size = 7, direction = Sort.Direction.DESC) Pageable pageable){ 
        return bookService.find(titleTerm, authorTerm, pageable);
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