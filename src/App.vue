<template>
  <v-app>
    <Header/>

<Content/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
export default {
  name: 'App',

  components: {
    Content,
    Footer,
    Header
  },
  data: () => ({
    //
  })
}
</script>
