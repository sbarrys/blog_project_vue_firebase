<template>
  <v-footer color="primary lighten-1" padless absoulte>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>{{footer}}</strong>
              <v-btn icon @click="openDialog"><v-icon>mdi-grease-pencil</v-icon></v-btn>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>
            푸터수정
                    <v-spacer/>
        <v-btn icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
        <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>

        </v-card-title>
        <v-card-text>
        <v-text-field v-model="text" outlined label="제목" @keypress.enter="save"    />
        </v-card-text></v-card>
      </v-dialog>

      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  props: ['footer'],
  methods: {
    async save () {
      try {
        this.$firebase.database().ref().child('site').update({
          footer: this.text
        })
      } catch (e) {
        console.log(e.message)
      } finally {
        this.dialog = false
      }
    },
    openDialog () {
      this.dialog = true
    }
  },
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    footer: function (text) {
      this.text = text
    }
  },
  data () {
    return {
      text: this.footer,
      dialog: false,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'

      ]
    }
  }
}

</script>
