<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <Header/>
    </v-app-bar>
    
    <v-content >
      <Guide/> 
    </v-content>

    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Guide from '../components/Guide.vue'

  export default {
    name: 'HistoryVue',

    components: {
    Header,
    Guide,
    Footer
},
  }
</script>