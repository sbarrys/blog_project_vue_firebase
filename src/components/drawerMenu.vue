<template>

    <v-navigation-drawer
    v-model="localdrawer"
      absolute
      temporary
    >
    <v-list>
      <v-list-group
        v-for="(item,i) in items"
        :key="i"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.subItems"
          :key="subItem.title"
          :to="subItem.to"
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
  props: ['items', 'drawer'],
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    drawer: function (drawer) {
      this.localdrawer = drawer
    }
  },
  data () {
    return {
      localdrawer: this.drawer
    }
  }

}

</script>
