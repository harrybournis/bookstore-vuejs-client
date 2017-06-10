<template lang="pug">
.container
  .row
    .col.s12
      h2.center-align Books
    .col.s12
      ul.collection
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
</template>

<script>
	export default {
		name: "Books",
		data () {
			return {
				books: [
					{
						id: 1,
						title: "title1",
						author: "author1",
						language: "language",
						isbn: "23213425",
						subject: "Horror",
						isInstock: true,
						publisher: "publisher1"
					},
					{
						id: 2,
						title: "title2",
						author: "author2",
						language: "language",
						isbn: "23213425",
						subject: "Horror",
						isInstock: false,
						publisher: "publisher2"
					}
				],
				redOrGreen (book) {
					return {
						red: !book.isInstock,
						green: book.isInstock
					}
				}
			}
		}
	}
</script>
<style scoped>
	.collection .collection-item.avatar .title.booktitle {
		font-size: 1.4rem;
	}
</style>
