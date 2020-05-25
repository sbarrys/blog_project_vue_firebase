<template>
  <v-app>
    <Header :title="site.title"/>
    <Content :items="site.menu"/>

    <Footer :footer="site.footer"></Footer>
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
  data: () => {
    return {
      site: {
        menu: [],
        title: 'App.vue에서 보내고 Props로 받아준 타이틀입니다.',
        footer: 'App.vue에서 보내고 Props로 받아준 푸터입니다'
      }
    }
    //
  },
  mounted () {
    console.log(this.$firebase)
  },
  methods: {

  }

}

</script>
