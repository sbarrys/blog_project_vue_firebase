import Vue from 'vue'
import * as Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig.js'
Firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = Firebase
