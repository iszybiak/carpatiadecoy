<template>
<div class="block">
 <v-img 
    src="../assets/images/guide-back.jpg" 
    max-height="500"></v-img>
    
    <v-content class="d-flex flex-column justify-space-between align-center">
        <v-card
            class="mx-auto"
            max-width="344"
        >
       <v-img
        src="../assets/images/man.jpg"
        />
        </v-card>

        <v-container class="text">
        <h3 class="text-center">Michał Cabacki</h3>
        <v-divider></v-divider>
        
  
        <h4 class="justify">Michał jest miłośnikiem turystyki. Podróżuje po całej Polsce i nie tylko, jednak najbiższe jego sercu jest Podkarpacie. Bieszczadzkie widoki i nietuzinkowe zabytki skradły jego serce. </h4>
        <h4 class="justify">Chcąc podzielić się swoją miłością do podkarpackich trenów współtworzy stronę dzięki której turyści nie będą musieli zastanawiać się którą podkarpacką atrakcję wybrać. </h4>
        <h4 class="justify">Jeśli chcesz więcej dowiedzieć się o bieszczadzkich terenach, posłuchać ciekawostek lub legend związanych Podkarpaciem skontaktuj się z Michałem i do zobaczenia!</h4>
        <v-divider></v-divider>
        <v-container class="text-center">
        <v-icon color="black">mdi-phone </v-icon>
        <v-text class="right"><strong> +48 654 321 987</strong></v-text>
        </v-container>
        <v-container class="text-center ">
        <v-icon color="black" >mdi-email </v-icon>
        <v-text class="right"><strong> michał.cabacki@gmail.com</strong></v-text>
        </v-container>
        </v-container>
    </v-content>
</div>
</template>

<script>
export default {
    name: 'Guide',
}
</script>

<style scoped>
.block{
    position: relative;
}
.text-center{
    font-family: 'Garamond' !important;  
    padding-top: 5px;
}
.justify{
    font-family: 'Garamond' !important;  
    text-align: justify;
    padding-top: 15px;
    padding-bottom: 15px;
}
.text{
    padding: 30px; 
    width: 80%;
    max-width: 700px;
}
.right{
    font-family: 'Garamond'  !important;  
    padding-left: 20px;
}

</style>