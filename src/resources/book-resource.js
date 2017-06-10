import axios from 'axios';

const HTTP = axios.create({
  baseURL: `http://localhost:8080/api`
})

export default class BookResource {

  static getBooks() {
    return HTTP.get('books')
  }

  static getBook(id) {
    return HTTP.get('books/' +  id)
  }

  static deleteBook(id) {
    return HTTP.delete('books/' + id)
  }

  static updateBook(book) {
    return HTTP.put('books/' + book.id, book)
  }

  static createBook(book) {
    return HTTP.post('books', book)
  }
}
