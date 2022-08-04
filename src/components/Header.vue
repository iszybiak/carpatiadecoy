<template>
  <v-container >
    <v-toolbar flat >
      <v-toolbar-title class="title" 
      >Podkarpacie</v-toolbar-title>

      <v-spacer></v-spacer>
      

      <v-toolbar-items class="btn-style" >
        <v-btn text >
          <router-link class="link" to="/">
            Strona główna
          </router-link>  
        </v-btn>

        <v-btn text>
          <router-link class="link" to="/history">
            Historia
          </router-link>
          
        </v-btn>

        <v-btn text>
          <router-link class="link" to="/">
          Przewodnik
          </router-link>
        </v-btn>
      </v-toolbar-items>

      
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>

<style scoped>
.title{
  font-family: 'Garamond' !important;
  font-size: 28px !important;
}
.btn-style{
  font-family: 'Garamond' !important;
}

.link{
  color: black;
  text-decoration: none;
}
</style>

