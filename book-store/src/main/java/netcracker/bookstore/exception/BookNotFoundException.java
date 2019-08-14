package netcracker.bookstore.exception;

public class BookNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = -7063527217547021134L;

    public BookNotFoundException(String id) {
        super("Book " + id + " not found");
    }
}