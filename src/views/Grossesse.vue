<template>
  <div class="grossesse">
    <head>
      <meta charset="utf-8" />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:600,900"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Projet Valou</title>
    </head>
    <Header />
    <p class="heading">Grossesse</p>
    <br />
    <p class="sousRubrique">MOSELLE & ALENTOURS</p>

    <p class="sousTitre">
      Votre famille s'apprête à s'agrandir, toutes mes félicitations ! Que ce
      soit votre premier ou que vous ayez déjà toute une tribu, c'est un
      événement qui changera à jamais votre vie !
    </p>

    <div class="vueGallery">
      <!-- partie diapo -->
      <div
        class="activePhoto"
        :style="'background-image: url(' + photos[activePhoto] + ');'"
      >
        <button
          type="button"
          aria-label="Previous Photo"
          class="previous"
          @click="previousPhoto()"
        >
          <i class="fas fa-chevron-circle-left"></i>
        </button>
        <button
          type="button"
          aria-label="Next Photo"
          class="next"
          @click="nextPhoto()"
        >
          <i class="fas fa-chevron-circle-right"></i>
        </button>
      </div>
      <div class="thumbnails">
        <div
          v-for="(photo, index) in photos"
          :src="photo"
          :key="index"
          @click="activePhoto = index"
          :class="{ active: activePhoto == index }"
          :style="'background-image: url(' + photo + ')'"
        ></div>
      </div>
    </div>

    <div class="gallery-image">
      <div class="img-box">
        <img src="https://picsum.photos/350/250?image=444" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Library</p>
            <p class="opacity-low">Architect Design</p>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="https://picsum.photos/350/250/?image=232" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Night Sky</p>
            <p class="opacity-low">Cinematic</p>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="https://picsum.photos/350/250/?image=431" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Tea Talk</p>
            <p class="opacity-low">Composite</p>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="images/logo2.png" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Road</p>
            <p class="opacity-low">Landscape</p>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="https://picsum.photos/350/250?image=344" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Sea</p>
            <p class="opacity-low">Cityscape</p>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img src="https://picsum.photos/350/250?image=494" alt="" />
        <div class="transparent-box">
          <div class="caption">
            <p>Vintage</p>
            <p class="opacity-low">Cinematic</p>
          </div>
        </div>
      </div>

      <div class="img-box">
        <img
          src="https://picsum.photos/350/250?image=494"
          alt="Image de la page d'acceuil du site d'informations"
        />
        <div class="transparent-box" onclick="">
          <div class="caption">
            <p>Collection AFFETTO</p>
            <p class="opacity-low">
              Rendez-vous préalable pour organisation de la journée <br /><br />
              Préparatifs des mariés<br /><br />
              Cérémonie Civil et/ou Religieuse <br /><br />
              Photos de couple <br /><br />
              50 fichiers numériques H
            </p>
          </div>
        </div>
      </div>

      <div class="img-box">
        <img
          src="https://picsum.photos/350/250?image=344"
          alt="Image de la page d'acceuil du site d'informations"
        />
        <div class="transparent-box" onclick="">
          <div class="caption">
            <p>Collection TENEREZZA</p>
            <p class="opacity-low">
              Rendez-vous préalable pour organisation de la journée <br /><br />

              Préparatifs des mariés <br /><br />

              Cérémonie Civil et/ou Religieuse <br /><br />

              Photos de couple<br /><br />

              Vin d’honneur <br /><br />

              80 fichiers numériques HD
            </p>
          </div>
        </div>
      </div>

      <div class="img-box">
        <img
          src="https://picsum.photos/350/250/?image=431"
          alt="Image de la page d'acceuil du site d'informations"
        />
        <div class="transparent-box" onclick="">
          <div class="caption">
            <p>Collection AMORE</p>
            <p class="opacity-low">
              Rendez-vous préalable pour organisation de la journée<br /><br />
              Préparatifs des mariés<br /><br />
              Cérémonie Civil et/ou Religieuse<br /><br />
              Photos de couple<br /><br />
              Vin d’honneur<br /><br />
              Soirée jusqu’à la pièce montée<br /><br />
              L’ensemble des fichiersnumérique HD
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="texte">
      <p>
        Afin de prendre rendez-vous, il vous suffit de vous rendre sur ma page
        <router-link to="/formulaire">contact</router-link> et de remplir le
        formulaire avec la collection de votre choix. L’idéal serait de prendre
        rendez-vous lors du 7ème de grossesse. Si vous avez des souhaits
        particuliers merci de me le notifier en commentaire. Une réponse par
        mail vous sera renvoyée dans les plus brefs délais avec toutes les
        informations nécessaires.
      </p>

      <p>
        Le jour de votre venue nous discuterons brièvement de vos souhaits et de
        vos envies. Afin que la séance se passe dans la plus grande sérénité,
        merci de bien vouloir respecter l’horaire donné. Si la collection
        ELEGANZA est choisie nous procéderons à la mise en beauté, pour les
        autres nous débuterons le shooting. Pour les tenues merci de prévoir :
        <br />
      </p>

      <p>
        ✔️ Débardeur blanc et/ou noir <br />
        ✔️ Jean qui ne se ferme pas <br />
        ✔️ Chemisier Blanc ou noir <br />
        ✔️ Sous-vêtements blanc, noir et cher (avec et sans bretelles pour le
        prêt des robes)<br />
        ✔️ Accessoire bébé (un doudou, des chaussons ou autres à votre guise)
        <br />
        ✔️ 1 tenue que vous adoré porter <br />
      </p>

      <p>
        Pour Papa, chemise noire ou blanche, t-shirt noir ou blanc, jean. Il
        faut que vous soyez raccord avec votre moitié. Et les enfants idem pour
        garçon ou petite robe pour une petite fille 😊.
      </p>

      <p>
        Soyez vous-même, laissez-moi vous guider lors de la séance, faites-moi
        confiance 😉.
      </p>

      <p>
        Une sélection de photos brutes vous sera transmise via mon site
        internet, à vous de choisir les photos qui vous plaisent le plus. Pour
        information, les photos sont envoyées brutes sans retouches, après votre
        sélection je procéderai aux différentes retouches. Si vous souhaitez
        choisir des photos supplémentaires lors de votre sélection, il est tout
        à fait possible de le faire. Les photos supplémentaires choisies seront
        facturées 9€ la photo. Une fois les photos retouchées, elles vous seront
        transmises via WETRANSFERT.
      </p>

      <p>
        Si vous souhaitez réaliser des clichés à l’extérieur également c’est
        tout à fait possible. Le lieu sera choisi par mes soins aux alentours du
        studio et un supplément de 45€ sera facturé pour 1 heure.
      </p>
    </div>

    <div class="card2">
      <!--permet de mettre les card les une à coté des autres -->
      <Card
        titre="Collection BELLEZZA"
        description="📷 Séance en studio d’1h30 / Maman seule"
        description2="📷 10 fichiers numériques Haute définition"
        prix="85€"
      />
      <Card
        titre="Collection MERAVIGLIA"
        description="📷 Séance en studio de 1h30/ Maman avec Papa et Frère ou sœur"
        description2="📷 Prêt de tenues, voiles et accessoires"
        description3="📷 15 fichiers numériques Haute définition"
        prix="125€"
      />

      <Card
        titre="Collection ELEGANZA"
        description="📷 Séance en studio de 3h00 / Maman seule, Papa et Frère ou Sœur (1h de mise en beauté, 2h de shooting)"
        description2="📷 Prêt de tenues, voiles et accessoires"
        description3="📷 Mise en beauté par une maquilleuse diplômée"
        description4="📷 20 fichiers numériques Haute définition"
        prix="210€"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Grossesse",
  components: { Footer, Header, Card },
  data() {
    return {
      photos: [
        require("../assets/coeur.jpg"), //require permet de créer l'url de l'image
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg",
        require("../assets/mariage_maria.jpg"),
        require("../assets/bapteme_tina.jpg"),
      ],
      activePhoto: "",
    };
  },
  mounted() {
    this.activePhoto = 0;
    document.addEventListener("keydown", (event) => {
      if (event.which == 37) this.previousPhoto();
      if (event.which == 39) this.nextPhoto();
    });
  },
  methods: {
    nextPhoto() {
      this.activePhoto =
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0;
    },
    previousPhoto() {
      this.activePhoto =
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1;
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: Raleway;
  /*background-color: #202125;*/
  background-color: white;
}

.heading {
  /*partie titre des rubriques + son animation */
  text-align: center;
  font-size: 2em;
  letter-spacing: 1px;
  padding: 0px;
  color: #003248;
  background: linear-gradient(
    to right,
    rgb(0, 0, 0),
    rgb(0, 0, 0),
    rgb(0, 0, 0),
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: h1anim 4s linear forwards;
  background-size: 500% auto;
  display: inline-block;
  background-position: 150% center;
  background-repeat: no-repeat;
  margin: 10px;
  margin-bottom: 0px;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: bold;
}

@keyframes h1anim {
  from {
    background-position: 150% center;
  }
  to {
    background-position: 0 center;
  }
} /*fin partie titre rubrique + son animation */

.texte a {
  font-size: 15px;
  text-decoration: underline;
  font-weight: bold;
  font-family: "Barlow Semi Condensed", sans-serif;
}

.texte {
  /*texte au dessus des photo de l'acceuil + animation*/
  margin: auto;
  width: 70%;
  padding-top: 0px;
  font-family: "Libre Bodoni", serif;
  text-align: justify;
  font-size: 15px;
  margin-top: 20px;
}

.sousTitre {
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  width: 50%;
  color: #588589;
  font-size: 18px;
}

.sousRubrique {
  margin-top: 0px;
  color: #003248;
  font-size: 18px;
}

.grossesse .gallery-image {
  display: none;
}

$brand: #5c4084; //partie diapo

.vueGallery {
  background-color: #f5f5f5;
  .activePhoto {
    width: 80%;
    margin: auto;
    margin-bottom: 5px;
    padding-bottom: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    position: relative;

    button {
      border: none;
      background-color: transparent;
      font-size: 32px;
      color: #fff;
      opacity: 0.5;
      position: absolute;
      outline: none;
      height: 100%;

      &:hover {
        opacity: 1;
      }
      &.previous {
        padding: 0 1em 0 0.7em;
        left: 0;
        background: -moz-linear-gradient(
          left,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        background: -webkit-linear-gradient(
          left,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=1 );
      }
      &.next {
        padding: 0 0.7em 0 1em;
        right: 0;
        background: -moz-linear-gradient(
          left,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        background: -webkit-linear-gradient(
          left,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=1 );
      }
    }
  }
  .thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 5px;
    width: 80%;
    margin: auto;

    div {
      width: 100%;
      border: 2px solid #fff;
      outline: 2px solid #fff;
      cursor: pointer;
      padding-bottom: 65%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 1;

      &:hover {
        opacity: 0.6;
      }
      &.active {
        outline-color: $brand;
        opacity: 1;
      }
    }
  }
} //fin diapo

.card2 {
  //contient l'ensemble des cards
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 900px) {
  .vueGallery {
    display: none;
  }
  .grossesse .gallery-image {
    padding: 0px;
    display: block;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gallery-image img {
    height: 280px;
    width: 350px;
    transform: scale(1);
    transition: transform 0.4s ease;
  }

  .img-box {
    box-sizing: content-box;
    margin: 10px;
    height: 280px;
    width: 350px;
    overflow: hidden;
    display: inline-block;
    color: white;
    position: relative;
    background-color: white;
  }

  .caption {
    position: absolute;
    bottom: 1px;
    left: 20px;
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .transparent-box {
    height: 280px;
    width: 350px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
  }

  .img-box:hover img {
    transform: scale(1.1);
  }

  .img-box:hover .transparent-box {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .img-box:hover .caption {
    transform: translateY(-20px);
    opacity: 1;
  }

  .img-box:hover {
    cursor: pointer;
  }

  .caption > p:nth-child(2) {
    font-size: 0.8em;
  }

  .opacity-low {
    opacity: 0.5;
  }

  .card2 {
    //contient l'ensemble des cards
    flex-direction: column;
  }
}
</style>
