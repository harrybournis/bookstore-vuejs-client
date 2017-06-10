<template lang="pug">
#app
  header
    nav
      .nav-wrapper
        a.brand-logo(href='#') Bookstore
        ul#nav-mobile.right.hide-on-med-and-down
          li
            a(href='#create-modal') Create a Book
  main
    router-view
  footer.page-footer
    .footer-copyright
      .container
        | © 2014 Bookstore
        a.grey-text.text-lighten-4.right(href='#!') bookstore-api-harrybournis.herokuapp.com
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: "Skata"
      }
    }
  }
</script>

<style>
</style>
