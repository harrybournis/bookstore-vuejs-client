<template lang="pug">
.container
  .row
    .col.s12
      h3 Create New Book
      .row
        form.col.s12
          .row
            .input-field.col.s10.offset-s1
              input#title.validate(type='text',"v-model"="book.title")
              label(for='title',class="active") Title
            .input-field.col.s10.offset-s1
              input#author.validate(type='text',"v-model"="book.author")
              label(for='author',class="active") Author
          .row
            .input-field.col.s5.offset-s1
              input#subject.validate(type='text',"v-model"="book.subject")
              label(for='subject',class="active") Subject
            .input-field.col.s5
              input#ISBN.validate(type='text',"v-model"="book.isbn")
              label(for='ISBN',class="active") ISBN
          .row
            .input-field.col.s5.offset-s1
              input#language.validate(type='text',"v-model"="book.language")
              label(for='language',class="active") Language
            .input-field.col.s5
              input#publisher.validate(type='text', "v-model"="book.publisher")
              label(for='publisher',class="active") Publisher
          .row
            .input-field.col.s5.offset-s1
              input#inStock(type='checkbox', checked='book.isInstock',"v-model"="book.isInstock")
              label(for='inStock') In Stock?
            .input-field.col.s5
              button.btn.waves-effect.waves-light(type='submit',"@click"="createBook()")
                | Submit
                i.material-icons.right send
</template>

<script>
  import BookResource from '@/resources/book-resource.js';

  export default {
    name: "Createbookform",
    data () {
      return {
        book: {
          title: null,
          author: null,
          language: null,
          publisher: null,
          isInstock: true,
          subject: null,
          isbn: null
        },
        pageTitle: null
      }
    },
    methods: {
      createBook () {
        BookResource.createBook(this.book).then(response => {
          alert("Book Created!")
          this.$router.push({ name: 'Books' })
        })
        .catch(e => {
          console.log(e)
          alert("Could not create the book")
        })
      }
    }
  }
</script>

<style scoped>
  .spin {
    animation: spinIt 1.5s infinite linear;
    font-size: 4rem;
  }
  @keyframes spinIt {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(359deg); }
  }
</style>
