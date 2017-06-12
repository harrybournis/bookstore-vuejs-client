import axios from 'axios';

const HTTP = axios.create({
  baseURL: `https://bookstore-api-harrybournis.herokuapp.com/api`
  // baseURL: `http://localhost:8080/api`
})

const RESOURCE_URL = 'books/'

export default class BookResource {

  static getBooks() {
    return HTTP.get(RESOURCE_URL)
  }

  static getBook(id) {
    return HTTP.get(RESOURCE_URL +  id)
  }

  static deleteBook(id) {
    return HTTP.delete(RESOURCE_URL + id)
  }

  static updateBook(book) {
    return HTTP.put(RESOURCE_URL + book.id, book)
  }

  static createBook(book) {
    return HTTP.post(RESOURCE_URL, book)
  }
}
