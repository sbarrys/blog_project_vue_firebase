<template>
  <div>
    <v-app-bar
      color="primary lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>

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
<DrawerMenu :drawer="drawer"></DrawerMenu>
        <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-list>
      <v-list-group
        v-for="item in item"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer> -->

  </div>
</template>

<script>
import DrawerMenu from './drawerMenu'
export default {
  components: { DrawerMenu },
  props: ['title'],
  methods: {
    save () {
      console.log('clicked save')
      this.$firebase.database().ref().child('Post').set({
        title: 'title1', text: 'text1'
      })
    },
    listeningg () {
      this.$firebase.database().ref().child('Post').on('value', function (snapshot) {
        console.log(snapshot.val())
      }
      )
    },
    async onceListen () {
      const sn = await this.$firebase.database().ref().child('Post').once('value')
      console.log(sn.val())
    }
  },
  data: () => ({
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
  })
}

</script>
