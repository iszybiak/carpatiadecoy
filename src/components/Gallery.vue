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
            description:"Serpentyny w Izdebkach to jedne z nielicznych krętych dróg w Polsce. Serpentyna z łagodnym nachyleniem wykorzystywana jest przez miłośników corocznej imprezy „Izdebki Kamp” do rywalizacji czasowej związanej ze zjazdem na deskorolkach"
          },
          {
            id:2,
            src: require("../assets/images/kosciol.jpg"),
            name:"Kościół św. Stanisława i św. Wojciecha",
            location:"Poręby Dymarskie",
            description:"Kościół wzniesiono pierwotnie w Cmolasie w połowie XVII wieku.Ciekawostką jest znajdujący się w kościele wizerunek diabła Tutivillusa z 1674 r."
           // title:"Piękne zabytki"
          },
          {
            id:3,
            src: require("../assets/images/rzeszów.jpg"),
            name:"Miasto Rzeszów",
            location:"Rzeszów",
            description:"Rzeszów zwany stolicą innowacji ma w zanadrzu kilka wartych zobaczenia zabytków i atrakcji. Są to Podziemia Trasą Turstyczną, Rynek z Ratuszem, Zamek i letni Pałac Lubomirskich, Wille na Alei Pod Kasztanami oraz Dawne synagogi. "
           // title:"Miasta tętniące życiem"
          },
          {
            id:4,
            src: require("../assets/images/solina.jpg"),
            name:"Jezioro Solińskie",
            location:"Solina",
            description:"Solina, Polańczyk oraz Jezioro Solińskie to bez wątpienia jedna z ciekawszych i bardziej malowniczych atrakcji w województwie podkarpackim. Niewielka miejscowość Solina znajduje się około 2h drogi z Rzeszowa, w pobliżu Jeziora Solińskiego, czyli jednego z największych w Polsce sztucznie utworzonych zbiorników. "
           // title:"Niezapomniane widoki"
          },
          {
            id:5,
            src: require("../assets/images/Arboretum.jpg"),
            name:"Arboretum",
            location:"Bolestraszyce",
            description:"Należy do cennych zabytków przyrody i kultury Małopolski. W Bolestraszycach jednoczą się historia i czas współczesny. W Muzeum Przyrodniczym prezentowane są wystawy stałe „Chrońmy ptaki” – wystawa ornitologiczna i „Chrząszcze”. "
           // title:"Niezapomniane widoki"
          },
          {
            id:6,
            src: require("../assets/images/lancut23.jpg"),
            name:"Zamek w Łańcucie",
            location:"Łańcut",
            description:"Zamek w Łańcucie jest jedną z najpiękniejszych rezydencji arystokratycznych w Polsce. Słynie ze znakomitych wnętrz mieszkalnych oraz niezwykle interesującej kolekcji pojazdów konnych. Zespół pałacowy otacza stary, malowniczy park w stylu angielskim, w którym wznoszą się liczne pawilony i zabudowania gospodarcze, ściśle niegdyś związane z codziennym życiem łańcuckiej rezydencji."
           // title:"Niezapomniane widoki"
          },

          {
            id:7,
            src: require("../assets/images/skansenSanok.jpg"),
            name:"Muzeum Budownictwa Ludowego",
            location:"Sanok",
            description:"Sanocki skansen jest pierwszym w powojennej Polsce i największym w kraju muzeum etnograficznym. Skansen zmienia się wraz z porami roku. Wiosną przed chałupami rozkwitają  ogródki, obsiewa się pola, latem żniwuje, jesienią zbiera plony. W skansenie są budynki mieszkalne, gospodarcze, przemysłowe, użyteczności publicznej i sakralne."
           // title:"Niezapomniane widoki"
          },
          {
            id:8,
            src: require("../assets/images/solinazapora.jpg"),
            name:"Zapora Solińska",
            location:"Solina",
            description:"Nad zaporę widzie alejka pomiędzy licznymi budkami z bieszczadzkimi pamiątkami. Miejscowi nazywają ją solińskimi Krupówkami.Tuż przed wejściem na Zaporę na Solinie, przystańcie przy tablicy informacyjnej. Możecie dowiedzieć się z niej wielu ciekawostek takich jak moc elektrowni, czy data powstania."
           // title:"Niezapomniane widoki"
          },
          {
            id:9,
            src: require("../assets/images/zamekkrasiczyn.jpg"),
            name:"Zamek w Krasiczynie",
            location:"Krasiczyn",
            description:"Na mapie Podkarpacia znajduje się wiele pięknych miejsc, ale wśród tych najbardziej urzekających kunsztem architektury jest Zespół Zamkowo-Parkowy w Krasiczynie.Zamek w Krasiczynie z przełomu XVI i XVII wieku jest jednym z cenniejszych zabytków architektury renesansowo-manierystycznej w Polsce. "
           // title:"Niezapomniane widoki"
          },
          {
            id:10,
            src: require("../assets/images/tarnica.jpg"),
            name:"Szczyt Tarnica",
            location:"Wołosate",
            description:"Tarnica to najwyższy szczyt w Bieszczadach po polskiej stronie i liczy 1346 m. Turyści wybierają się tutaj, nie tylko z uwagi na wysokość, ale przede wszystkim na widoki. Z uwagi na fakt, że wyżej w polskich Bieszczadach się da, Tarnica znalazła swoje miejsce w Koronie Gór Polski."
           // title:"Niezapomniane widoki"
          },
          {
            id:11,
            src: require("../assets/images/polonina_wietlinska.jpg"),
            name:"Połonina Wietlińska",
            location:"Bieszczady Zachodnie",
            description:"Połonina Wetlińska wraz ze słynną Chatką Puchatka na grani to bez wątpienia jeden z najpiękniejszych fragmentów Bieszczadzkiego Parku Narodowego. I ciężko się dziwić, że turyści namiętnie odwiedzają ten skrawek gór. Jest pięknie, widowiskowo a do tego szlak oferuje całkiem łatwe i krótkie podejście."
           // title:"Niezapomniane widoki"
          },
          
          {
            id:12,
            src: require("../assets/images/muzeum_narodowe_ziemi_przemyskiej.jpg"),
            name:"Muzeum Narodowe Ziemi Przemyskiej",
            location:"Przemyśl",
            description:"Muzeum Narodowe Ziemi Przemyskiej w Przemyślu – placówka muzealna w Przemyślu, założona w 1909 z inicjatywy miejscowych działaczy społecznych jako Muzeum Towarzystwa Przyjaciół Nauk w Przemyślu.W magazynach muzeum znajdują się między innymi obszerne zbiory dotyczące pracy naukowej profesora Rudolfa Weigla."
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