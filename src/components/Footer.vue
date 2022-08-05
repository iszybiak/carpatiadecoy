<template>
    <v-container class="pt-0 pb-0">
    <v-footer class="pt-0 pb-0">
    <v-col class=" text-center">
    <v-card-text class=" pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. 
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
        </v-card-text>
         <v-card-text class=" pt-0 pb-0 font-italic">
            Chcesz skorzyać z porad przewodnika? 
            <p><v-icon small color="black s2x">mdi-phone</v-icon><strong> +48 654 321 987</strong></p>
         </v-card-text>
         <v-divider></v-divider>
      <v-card-text class="pb-0" >
        {{ new Date().getFullYear() }} — <strong>Podkarpacie</strong>
      </v-card-text>
    </v-col>
  </v-footer>
    </v-container>
</template>

<script>
export default {
    name:"Footer",
}
</script>

