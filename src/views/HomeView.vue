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
      <Courusel/>
      <Gallery/>
    </v-content>

    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
import Courusel from '../components/Carousel.vue'
import Gallery from '../components/Gallery.vue'
import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',

    components: {
    Header,
    Courusel,
    Gallery,
    Footer
},
  }
</script>
