<template>
  <v-container >
    <v-toolbar flat >
      <v-toolbar-title class="title" 
      >Podkarpacie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="btn-style" >
        <v-btn text >
          Strona główna
        </v-btn>

        <v-btn text>
          Historia
        </v-btn>

        <v-btn text>
          Przewodnik
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
</style>

