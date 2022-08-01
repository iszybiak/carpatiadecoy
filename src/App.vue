<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <router-view/>
    </v-app-bar>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
