<template lang="pug">
h1 header
header
  nav
    .nav-wrapper
      a.brand-logo(href='#') Bookstore
      ul#nav-mobile.right.hide-on-med-and-down
        li
          router-link(":to"="createbookform") Create a Book

</template>

<script>
	export default {
		name: "Pageheader"
	}
</script>
