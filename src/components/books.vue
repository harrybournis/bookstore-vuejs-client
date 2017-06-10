<template lang="pug">
.container
  .row
    .col.s12
      h2.center-align Books
    .col.s12
      ul.collection("v-if"="books")
        li.collection-item.avatar("v-for"="book in books")
          i.material-icons.circle(":class"="redOrGreen(book)") {{ book.isInstock ? 'assignment_turned_in' : 'assignment_late' }}
          span.title.booktitle {{ book.title }}
          p
            | by: {{ book.author }}
            br
            | ISBN: {{ book.isbn }}
            br
            | Subject: {{ book.subject }}
            br
            | Publisher: {{ book.publisher }}
          a.secondary-content(href='#!')
            i.material-icons create
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
				}
			}
		},
	    methods:{
	        // getBooks: function() {

	        // }
	    },
	    created () {
	        // this.books = BookResource.getBooks()
	        BookResource.getBooks().then(response => {
      			this.books = response.data
    		})
    		.catch(e => {
      			console.log(e)
      			// this.books = e;
			})
	        // console.log(BookResource.getBooks())
	        // console.log("Threse are the books: ", this.books)
	    }
	}
</script>

<style scoped>
	.collection .collection-item.avatar .title.booktitle {
		font-size: 1.4rem;
	}
</style>
