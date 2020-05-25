<template>
  <div>
    <v-app-bar
      color="primary lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}
      <v-btn icon @click="openDialog"><v-icon>mdi-grease-pencil</v-icon></v-btn>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>
            제목수정
                    <v-spacer/>
        <v-btn icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
        <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>

        </v-card-title>
        <v-card-text>
        <v-text-field v-model="text" outlined label="제목" @keypress.enter="save"    />
        </v-card-text></v-card>
      </v-dialog>
</v-toolbar-title>
      <v-spacer></v-spacer>
<!-- 저장-->

      <v-btn icon @click="save">
        <v-icon>mdi-check</v-icon>
      </v-btn>

<!-- 계속 리스닝 하게 만듬 -->

      <v-btn icon @click="listeningg">
        <v-icon>mdi-numeric</v-icon>
      </v-btn>

<!-- 새로고침 (한번만 가져옴)-->
    <v-btn icon @click="onceListen">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
      <DrawerMenu :drawer="drawer" :items="items"></DrawerMenu>

  </div>
</template>

<script>
import DrawerMenu from './drawerMenu'
export default {
  components: { DrawerMenu },
  props: ['title', 'items'],
  methods: {
    openDialog () {
      this.dialog = true
    },
    async save () {
      try {
        this.$firebase.database().ref().child('site').update({
          title: this.text
        })
      } catch (e) {
        console.log(e.message)
      } finally {
        this.dialog = false
      }
    },
    listeningg () {
      this.$firebase.database().ref().on('value', function (snapshot) {
        console.log(snapshot.val())
      })
    },

    async onceListen () {
      const sn = await this.$firebase.database().ref().child('site').once('value')
      console.log(sn.val())
    }
  },
  data () {
    return {

      text: this.title,
      dialog: false,
      group: true,
      drawer: false,

      item: [
        {
          title: 'Home',
          items: [
            { title: 'index page' }
          ]
        }, {
          title: 'V-logs',
          active: true,
          items: [
            { title: '2018 -' },
            { title: '2019 -' },
            { title: '2020 - ing' }
          ]
        },
        {
          title: 'Dev',
          active: true,
          items: [
            { title: 'android' },
            { title: 'Vue.js' },
            { title: 'Spring' }
          ]
        }
      ]

    }
  }
}

</script>
