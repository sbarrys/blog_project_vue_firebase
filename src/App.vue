<template>
  <v-app>
    <Header :title="site.title" />
    <Content />

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
        menu: [
          {
            title: 'Home',
            icon: ' mdi-home',
            subItems: [
              {
                title: 'index page',
                to: '/'
              }

            ]
          }, {
            title: 'V-logs',
            icon: 'mdi-account',
            subItems: [
              { title: '2018 -', to: '/vlogs/2018' },
              { title: '2019 -', to: '/vlogs/2019' },
              { title: '2020 - ing', to: '/vlogs/2020' }
            ]
          },
          {
            title: 'Dev',
            icon: 'mdi-account',
            subItems: [
              { title: 'android', to: '/devs/android' },
              { title: 'Vue.js', to: '/devs/Vue.js' },
              { title: 'Spring', to: '/devs/Spring' }
            ]
          }
        ],
        title: 'App.vue에서 보내고 Props로 받아준 타이틀입니다.',
        footer: 'App.vue에서 보내고 Props로 받아준 푸터입니다'
      }
    }
    //
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
        } else {
          this.site = v
        }
      }, (e) => {
        console.log(e.message)
      })
    }
  }

}

</script>
