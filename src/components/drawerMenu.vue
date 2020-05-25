<template>

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
</template>

<script>
export default {
  props: {
    drawer: {

    }
  },
  // computed: {
  //   localdrawer: function () {
  //     return this.drawer
  //   }
  // },
  data: () => ({
    group: true,
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
