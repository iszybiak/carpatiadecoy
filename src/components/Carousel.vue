<template>
    <div class="block">
        <v-carousel hide-delimiters cycle>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            >
            <v-row
            class="fill-height title"
            align="center"
            justify="center"
          >
            <div>{{ item.title }}</div>
          </v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'Courusel',

    data () {
      return {
        items: [
          {
            src: require("../assets/images/serpentyny.jpg"),
           // title:"Malownicze pola"
          },
          {
            src: require("../assets/images/kosciol.jpg"),
           // title:"Piękne zabytki"
          },
          {
            src: require("../assets/images/rzeszów.jpg"),
           // title:"Miasta tętniące życiem"
          },
          {
            src: require("../assets/images/solina.jpg"),
           // title:"Niezapomniane widoki"
          },
        ],
      }
    },
  }
</script>

<style scoped>
.block{
    position: relative;
}
.v-window{
    @media only screen and (max-width: 599px){
        height: 220px !important;
    }
}
.v-image__image {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  
}


</style>
