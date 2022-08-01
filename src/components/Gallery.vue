<template>
    <v-container>
        <div class="block">
            <h2 class="text-center">Atrakcje Podkarpacia</h2>
        <v-row>
            <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="4"
            >
            <v-img
                :src="item.src"
                aspect-ratio="1"
                class="grey lighten-2"
            >
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>
            </v-col>
        </v-row>
        </div>
    </v-container>
</template>

<script>
  export default {
    name: 'Gallery',

    data () {
      return {
        items: [
          {
            id:1,
            src: require("../assets/images/serpentyny.jpg"),
            //title:"Serpentyny w Snoku"
          },
          {
            id:2,
            src: require("../assets/images/kosciol.jpg"),
           // title:"Piękne zabytki"
          },
          {
            id:3,
            src: require("../assets/images/rzeszów.jpg"),
           // title:"Miasta tętniące życiem"
          },
          {
            id:4,
            src: require("../assets/images/solina.jpg"),
           // title:"Niezapomniane widoki"
          },
          {
            id:5,
            src: require("../assets/images/Arboretum.jpg"),
           // title:"Niezapomniane widoki"
          },
          {
            id:6,
            src: require("../assets/images/lancut23.jpg"),
           // title:"Niezapomniane widoki"
          },

          {
            id:7,
            src: require("../assets/images/skansenSanok.jpg"),
           // title:"Niezapomniane widoki"
          },
          {
            id:8,
            src: require("../assets/images/solinazapora.jpg"),
           // title:"Niezapomniane widoki"
          },
          {
            id:9,
            src: require("../assets/images/zamekkrasiczyn.jpg"),
           // title:"Niezapomniane widoki"
          },
        ],
      }
    },
  }
</script>

<style  scoped>
.block {
padding: 60px 0;
border-bottom: 1px solid darken(white, 10%);

@media only screen and (max-width: 599px) {
padding: 20px 0;
}
}
h2 {
font-size: 30px;
padding: 0 0 10px;
margin: 0 0 40px;
position: relative;

@media only screen and (max-width: 599px) {
    font-size: 24px;
    padding: 0 0 5px;
    margin: 0 0 25px;
}
}
.text-center{
    font-family: 'Garamond' !important;
}

</style>