<template lang="pug">
.container
  .row
    .col.s12
      h2.center-align Books
    .col.s12
      ul.collection("v-if"="books")
        li.collection-item.avatar("v-for"="book in books")
          i.material-icons.circle(":class"="redOrGreen(book)") {{ book.isInstock ? 'assignment_turned_in' : 'assignment_late' }}
          span.title.booktitle {{ book.title }} , id: {{ book.id }}
          p
            | by: {{ book.author }}
            br
            | ISBN: {{ book.isbn }}
            br
            | Subject: {{ book.subject }}
            br
            | Publisher: {{ book.publisher }}
            br
            | Language: {{ book.language }}
          a.secondary-content(":href"="bookLink(book.id)",title="Edit Book")
            i.material-icons create
          a.secondary-content.delete-btn("@click"="deleteBook(book)",title="Delete Book")
            i.material-icons delete
      h1("v-else") No Books :(
</template>

<script>
	import BookResource from '@/resources/book-resource.js';

	export default {
		name: "Books",
		data () {
			return {
				books: null,
				redOrGreen (book) {
					return {
						red: !book.isInstock,
						green: book.isInstock
					}
				},
				bookLink (id) {
					return "/#/books/" + id;
				},
				deleteBook (book) {
					let r = confirm("Warning! Delete the Book " + book.title + " by " + book.author + "?");
					if (r == true) {
						BookResource.deleteBook(book.id).then(response => {
							this.books = this.books.filter(e => {
  							return e.id !== book.id;
							});
						})
						.catch(e => {
							console.log(e)
							alert("Could not delete the book!")
						})
					}
				}
			}
		},
    created () {
      BookResource.getBooks().then(response => {
  			this.books = response.data
  		})
  		.catch(e => {
  			console.log(e)
			})
    }
	}
</script>

<style scoped>
	.collection .collection-item.avatar .title.booktitle {
		font-size: 1.4rem;
	}

	.collection .collection-item.avatar .secondary-content.delete-btn {
		top: 52px;
		color: #E53935;
	}
</style>
