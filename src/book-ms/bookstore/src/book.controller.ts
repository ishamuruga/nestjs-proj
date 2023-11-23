import { Controller } from "@nestjs/common";
import { BookService } from "./book.service";
import { MessagePattern } from "@nestjs/microservices";
import { BookDTO } from "./book.dto";
import { delay } from "rxjs";

@Controller()
export class BookController {

    constructor(private readonly bookService: BookService) { }


    @MessagePattern({ cmd: 'new_book' })
    newBook(book: BookDTO): string {
        delay(10000)
        const result = this.bookService.newBook(book);
        if (!result) {
            return "Book already exists"
        } else {
            return result;
        }
    }

    @MessagePattern({ cmd: 'get_book' })
    getBook(bookID: string): BookDTO {
        return this.bookService.getBookByID(bookID)
    }

    @MessagePattern({ cmd: 'get_books' })
    getBooks(): BookDTO[] {
        return this.bookService.getAllBooks()
    }
}