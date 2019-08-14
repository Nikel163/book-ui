package netcracker.bookstore.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = {"netcracker.bookstore.entity", "netcracker.bookstore.repository"})
public class DataConfig {
    
}