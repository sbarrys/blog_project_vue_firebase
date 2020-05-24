<template>
  <div>
    <v-app-bar
      color="primary lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
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

        <v-navigation-drawer
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
    </v-navigation-drawer>

  </div>
</template>

<script>

export default {
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
