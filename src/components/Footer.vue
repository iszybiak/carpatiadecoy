<template>
    <v-footer >
    <v-col
      class="text-center"
      cols="12"
    >
    <v-card-text class=" pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. 
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
         <v-card-text class=" pt-0 pb-0 font-italic">
            Chcesz skorzyać z porad przewodnika? 
            <p><strong>+48 654 321 987</strong></p>
         </v-card-text>
         <v-divider></v-divider>
      <v-card-text class="pb-0" >
        {{ new Date().getFullYear() }} — <strong>Podkarpacie</strong>
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name:"Footer",

    data(){
        return{
            items:[
                
            ]
        }
    }
}
</script>