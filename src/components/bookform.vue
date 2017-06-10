<template lang="pug">
.container
  .row
    .col.s12.center-align("v-if"="loading")
      i.material-icons.spin refresh
      p Loading..
    .col.s12("v-else-if"="loading || book")
      h2 Edit book: {{ book.title }}
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
        book: null
      }
    },
    created () {
      BookResource.getBook(this.$route.params.id).then(response => {
        this.book = response.data
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
