<template lang="pug">
.container
  .row
    .col.s12.center-align("v-if"="loading")
      i.material-icons.spin refresh
      p Loading..

    .col.s12("v-else-if"="loading || book")
      h3 Edit book: {{ pageTitle }}
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
              button.btn.waves-effect.waves-light(type='submit',"@click"="updateBook()")
                | Submit
                i.material-icons.right send

              //- .switch
              //-   label(for='inStock')
              //-     | Out of Stock
              //-     input#inStock(type='checkbox')
              //-     span.lever
              //-     | In Stock

    .col.s12("v-else")
      h2 No book found with this id.
      router-link("to"="/")
        h2 Go Back
</template>

<script>
  import BookResource from '@/resources/book-resource.js';

  export default {
    name: "Bookform",
    data () {
      return {
        loading: true,
        book: null,
        pageTitle: null
      }
    },
    methods: {
      updateBook () {
        this.loading = true
        BookResource.updateBook(this.book).then(response => {
          alert("Book updated!")
          this.$router.push({ name: 'Books'})
        })
        .catch(e => {
          console.log(e)
          alert("Could not update the book")
          this.loading = false
        })
      }
    },
    created () {
      BookResource.getBook(this.$route.params.id).then(response => {
        this.book = response.data
        this.pageTitle = this.book.title
        this.loading = false
      })
      .catch(e => {
        console.log(e)
        this.loading = false

      })
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
