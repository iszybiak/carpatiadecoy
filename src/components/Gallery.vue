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
            <v-btn 
            fab
            @click="idAtr = item.id - 1; dialog = !dialog"
            width="auto" 
            height="auto"
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
            </v-btn>
            </v-col>
        </v-row>
      </div>

        
        <v-dialog
          v-model="dialog"
          max-width="600px"
        >
          <v-card >
            <v-img
            :src="items[idAtr].src"
            ></v-img>
            <v-card-title >
              <v-item >
              </v-item>
              {{items[idAtr].name }}
            </v-card-title>
            <v-card-text>
              {{items[idAtr].description }}
            </v-card-text>
            <v-card-text>
              {{items[idAtr].location }}
            </v-card-text>


            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
    </v-container>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        dialog: false, 
        idAtr: 0, 
        items: [
          {
            id:1,
            src: require("../assets/images/serpentyny.jpg"),
            name:"Serpentyny w Izdebkach",
            location:"Izdebki",
            description:"Serpentyny w Izdebkach to jedne z nielicznych kr??tych dr??g w Polsce. Serpentyna z ??agodnym nachyleniem wykorzystywana jest przez mi??o??nik??w corocznej imprezy ???Izdebki Kamp??? do rywalizacji czasowej zwi??zanej ze zjazdem na deskorolkach"
          },
          {
            id:2,
            src: require("../assets/images/kosciol.jpg"),
            name:"Ko??ci???? ??w. Stanis??awa i ??w. Wojciecha",
            location:"Por??by Dymarskie",
            description:"Ko??ci???? wzniesiono pierwotnie w Cmolasie w po??owie XVII wieku.Ciekawostk?? jest znajduj??cy si?? w ko??ciele wizerunek diab??a Tutivillusa z 1674 r."
           // title:"Pi??kne zabytki"
          },
          {
            id:3,
            src: require("../assets/images/rzesz??w.jpg"),
            name:"Miasto Rzesz??w",
            location:"Rzesz??w",
            description:"Rzesz??w zwany stolic?? innowacji ma w zanadrzu kilka wartych zobaczenia zabytk??w i atrakcji. S?? to Podziemia Tras?? Turstyczn??, Rynek z Ratuszem, Zamek i letni Pa??ac Lubomirskich, Wille na Alei Pod Kasztanami oraz Dawne synagogi. "
           // title:"Miasta t??tni??ce ??yciem"
          },
          {
            id:4,
            src: require("../assets/images/solina.jpg"),
            name:"Jezioro Soli??skie",
            location:"Solina",
            description:"Solina, Pola??czyk oraz Jezioro Soli??skie to bez w??tpienia jedna z ciekawszych i bardziej malowniczych atrakcji w wojew??dztwie podkarpackim. Niewielka miejscowo???? Solina znajduje si?? oko??o 2h drogi z Rzeszowa, w pobli??u Jeziora Soli??skiego, czyli jednego z najwi??kszych w Polsce sztucznie utworzonych zbiornik??w. "
           // title:"Niezapomniane widoki"
          },
          {
            id:5,
            src: require("../assets/images/Arboretum.jpg"),
            name:"Arboretum",
            location:"Bolestraszyce",
            description:"Nale??y do cennych zabytk??w przyrody i kultury Ma??opolski. W Bolestraszycach jednocz?? si?? historia i czas wsp????czesny. W Muzeum Przyrodniczym prezentowane s?? wystawy sta??e ???Chro??my ptaki??? ??? wystawa ornitologiczna i ???Chrz??szcze???. "
           // title:"Niezapomniane widoki"
          },
          {
            id:6,
            src: require("../assets/images/lancut23.jpg"),
            name:"Zamek w ??a??cucie",
            location:"??a??cut",
            description:"Zamek w ??a??cucie jest jedn?? z najpi??kniejszych rezydencji arystokratycznych w Polsce. S??ynie ze znakomitych wn??trz mieszkalnych oraz niezwykle interesuj??cej kolekcji pojazd??w konnych. Zesp???? pa??acowy otacza stary, malowniczy park w stylu angielskim, w kt??rym wznosz?? si?? liczne pawilony i zabudowania gospodarcze, ??ci??le niegdy?? zwi??zane z codziennym ??yciem ??a??cuckiej rezydencji."
           // title:"Niezapomniane widoki"
          },

          {
            id:7,
            src: require("../assets/images/skansenSanok.jpg"),
            name:"Muzeum Budownictwa Ludowego",
            location:"Sanok",
            description:"Sanocki skansen jest pierwszym w powojennej Polsce i najwi??kszym w kraju muzeum etnograficznym. Skansen zmienia si?? wraz z porami roku. Wiosn?? przed cha??upami rozkwitaj??  ogr??dki, obsiewa si?? pola, latem ??niwuje, jesieni?? zbiera plony. W skansenie s?? budynki mieszkalne, gospodarcze, przemys??owe, u??yteczno??ci publicznej i sakralne."
           // title:"Niezapomniane widoki"
          },
          {
            id:8,
            src: require("../assets/images/solinazapora.jpg"),
            name:"Zapora Soli??ska",
            location:"Solina",
            description:"Nad zapor?? widzie alejka pomi??dzy licznymi budkami z bieszczadzkimi pami??tkami. Miejscowi nazywaj?? j?? soli??skimi Krup??wkami.Tu?? przed wej??ciem na Zapor?? na Solinie, przysta??cie przy tablicy informacyjnej. Mo??ecie dowiedzie?? si?? z niej wielu ciekawostek takich jak moc elektrowni, czy data powstania."
           // title:"Niezapomniane widoki"
          },
          {
            id:9,
            src: require("../assets/images/zamekkrasiczyn.jpg"),
            name:"Zamek w Krasiczynie",
            location:"Krasiczyn",
            description:"Na mapie Podkarpacia znajduje si?? wiele pi??knych miejsc, ale w??r??d tych najbardziej urzekaj??cych kunsztem architektury jest Zesp???? Zamkowo-Parkowy w Krasiczynie.Zamek w Krasiczynie z prze??omu XVI i XVII wieku jest jednym z cenniejszych zabytk??w architektury renesansowo-manierystycznej w Polsce. "
           // title:"Niezapomniane widoki"
          },
          {
            id:10,
            src: require("../assets/images/tarnica.jpg"),
            name:"Szczyt Tarnica",
            location:"Wo??osate",
            description:"Tarnica to najwy??szy szczyt w Bieszczadach po polskiej stronie i liczy 1346 m. Tury??ci wybieraj?? si?? tutaj, nie tylko z uwagi na wysoko????, ale przede wszystkim na widoki. Z uwagi na fakt, ??e wy??ej w polskich Bieszczadach si?? da, Tarnica znalaz??a swoje miejsce w Koronie G??r Polski."
           // title:"Niezapomniane widoki"
          },
          {
            id:11,
            src: require("../assets/images/polonina_wietlinska.jpg"),
            name:"Po??onina Wietli??ska",
            location:"Bieszczady Zachodnie",
            description:"Po??onina Wetli??ska wraz ze s??ynn?? Chatk?? Puchatka na grani to bez w??tpienia jeden z najpi??kniejszych fragment??w Bieszczadzkiego Parku Narodowego. I ci????ko si?? dziwi??, ??e tury??ci nami??tnie odwiedzaj?? ten skrawek g??r. Jest pi??knie, widowiskowo a do tego szlak oferuje ca??kiem ??atwe i kr??tkie podej??cie."
           // title:"Niezapomniane widoki"
          },
          
          {
            id:12,
            src: require("../assets/images/muzeum_narodowe_ziemi_przemyskiej.jpg"),
            name:"Muzeum Narodowe Ziemi Przemyskiej",
            location:"Przemy??l",
            description:"Muzeum Narodowe Ziemi Przemyskiej w Przemy??lu ??? plac??wka muzealna w Przemy??lu, za??o??ona w 1909 z inicjatywy miejscowych dzia??aczy spo??ecznych jako Muzeum Towarzystwa Przyjaci???? Nauk w Przemy??lu.W magazynach muzeum znajduj?? si?? mi??dzy innymi obszerne zbiory dotycz??ce pracy naukowej profesora Rudolfa Weigla."
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