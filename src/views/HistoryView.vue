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
      <History/> 
    </v-content>

    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import History from '../components/History.vue'
import Carousel from '@/components/Carousel.vue'

  export default {
    name: 'HistoryVue',

    components: {
    Header,
    History,
    Footer,
    Carousel
},
  }
</script>
