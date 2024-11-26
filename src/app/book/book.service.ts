import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBooks(): Book[] {
    return [
      {
        id: 1,
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        genre: 'Fiction',
        rating: 4,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
      {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Classic',
        rating: 5,
        coverImage: 'images/book.jpg',
        isAvailable: false,
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        rating: 5,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        rating: 4,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
      {
        id: 5,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        rating: 4,
        coverImage: 'images/book.jpg',
        isAvailable: false,
      },
      {
        id: 6,
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: 'Adventure',
        rating: 3,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
      {
        id: 7,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Classic',
        rating: 4,
        coverImage: 'images/book.jpg',
        isAvailable: false,
      },
      {
        id: 8,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        rating: 5,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
      {
        id: 9,
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        genre: 'Historical Fiction',
        rating: 5,
        coverImage: 'images/book.jpg',
        isAvailable: false,
      },
      {
        id: 10,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genre: 'Science Fiction',
        rating: 4,
        coverImage: 'images/book.jpg',
        isAvailable: true,
      },
    ];
  }
}
