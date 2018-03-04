// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import Blah from './components/Blah.vue'
import Blah2 from './components/Blah2.vue'
import MeetQPage from './components/MeetQPage'
import ResultPage from './components/ResultPage'

import EventBus from './event-bus.js'

// Vue.component("blah", Blah);
// Vue.component("blah2", Blah2);
Vue.component('meet-q-page', MeetQPage)
Vue.component('result-page', ResultPage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data () {
    return {
      currentView: 'meet-q-page'
    }
  },
  methods: {
    changeView: function (newView) {
      this.currentView = newView
    }
  }
})
