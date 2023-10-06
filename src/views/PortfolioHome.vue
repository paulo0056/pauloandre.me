<template>
  <div class="app-bg">
    <div class="animation-wrapper">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
    </div>
    <div class="navbar">
      <v-row justify="space-between">
        <!--  <v-col> <a> Imagem home </a></v-col>> -->
        <v-col>
          <v-row justify="end" class="mr-2">
            <v-img
              :src="getImageUrl('brazil-flag.png')"
              class="mt-8 icon-flag"
            ></v-img>
            <a @click="setLocale('pt_BR')" class="mt-3">PT</a>
            <span style="color: white" class="mt-6">|</span>
            <v-img
              :src="getImageUrl('us-flag.png')"
              class="mt-8 ml-4 icon-flag"
            ></v-img>
            <a @click="setLocale('en')" class="mt-3">EN</a>
            <br />
            <a href="#about" class="mt-3"> {{ $t("about") }} </a>
            <a href="#projects" class="mt-3"> {{ $t("projects") }} </a>
            <a href="#contact" class="mt-3"> {{ $t("contact") }} </a>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-container class="main">
      <v-row justify="center">
        <v-icon icon="mdi-call-split" size="large" />
        <v-icon color="white" size="large"></v-icon>
        <p class="name-title">Paulo Andre Brito de Almeida Junior</p></v-row
      >
      <v-row id="about">
        <v-col class="hire-me-column">
          <p class="title-profile mt-12">{{ $t("hello") }},</p>
          <p class="subtitle-profile">{{ $t("my_name_is") }}</p>
          <p class="description-profile">
            {{ $t("profile") }}
          </p>
          <v-btn color="green" class="white--text mt-5">
            <a href="#contact" style="text-decoration: none; color: white">
              {{ $t("hire_me") }}
            </a></v-btn
          >
        </v-col>
      </v-row>
      <v-row class="row-custom" align="center">
        <v-col xs="12" sm="12" md="12" lg="6" xl="6">
          <v-row justify="center" align="end">
            <img src="../assets/js-logo.png" class="jsts-logo" alt="js-logo" />
            <img
              src="../assets/vue-logo3.png"
              height="250"
              max-width="250"
              style="margin-bottom: 100px"
              alt="vue-logo"
              class="vue-logo"
            />
            <img src="../assets/ts-logo.png" class="jsts-logo" alt="ts-logo" />
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <p class="title-profile mt-12">Skillset</p>

          <p class="description-profile">
            {{ $t("stacks") }}
          </p>
        </v-col>
      </v-row>
      <v-row class="row-custom exp-title" style="margin-top: 150px">
        <v-col
          ><span style="color: white; margin-left: 20px; font-size: 35px"
            >Exp</span
          >
          <hr style="max-width: 95%"
        /></v-col>
      </v-row>
      <v-card> </v-card>

      <v-tabs v-model="tab" style="max-width: 1100px; color: rgb(8, 228, 8)">
        <v-tab value="one">
          <v-row> <v-icon left> mdi-account </v-icon> GWCloud</v-row>
        </v-tab>
        <v-tab value="two">
          <v-row> <v-icon left> mdi-account </v-icon> Tecno System</v-row>
        </v-tab>
        <v-tab value="three">
          <v-row> <v-icon left> mdi-account </v-icon> GlobalWeb Corp</v-row>
        </v-tab>
      </v-tabs>

      <v-window v-model="tab" dark>
        <v-window-item value="one">
          <v-card flat class="tab-custom">
            <v-card-text style="color: white">
              <h2>{{ $t("intern") }}</h2>
              <h3
                style="
                  color: rgb(8, 228, 8);
                  font-weight: 700;
                  font-size: 17px;
                  margin-top: 10px;
                "
              >
                GWCloud
              </h3>
              <p style="font-size: 17px">2021</p>
              <p style="max-width: 1100px" class="exp-description">
                {{ $t("gwcloud_description_job") }}
              </p>
              <h2 style="margin-top: 10px">{{ $t("software_developer") }}</h2>
              <h3
                style="
                  color: rgb(8, 228, 8);
                  font-size: 17px;
                  font-weight: 700;
                  margin-top: 10px;
                "
              >
                GWCloud
              </h3>
              <p style="font-size: 17px">2022- 2023</p>
              <p style="max-width: 1100px" class="exp-description">
                {{ $t("gwcloud_description_job") }}
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="two">
          <v-card flat class="tab-custom">
            <v-card-text style="color: white">
              <h2>{{ $t("software_developer") }}</h2>
              <h3
                style="
                  color: rgb(8, 228, 8);
                  font-weight: 700;
                  margin-top: 10px;
                "
              >
                Tecno System
              </h3>
              <p style="font-size: 15px">2020-2021</p>

              <p style="max-width: 1100px" class="exp-description">
                {{ $t("tecno_system_description") }}
              </p>
              <h2 style="margin-top: 10px">{{ $t("president") }}</h2>
              <h3
                style="
                  color: rgb(8, 228, 8);
                  font-weight: 700;
                  margin-top: 10px;
                "
              >
                Tecno System
              </h3>
              <p style="font-size: 15px">2021-2022</p>

              <p style="max-width: 1100px" class="exp-description">
                {{ $t("president_description") }}
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="three">
          <v-card flat class="tab-custom">
            <v-card-text style="color: white">
              <h2>{{ $t("software_developer") }}</h2>
              <h3
                style="
                  color: rgb(8, 228, 8);
                  font-weight: 700;
                  margin-top: 10px;
                "
              >
                GlobalWeb Corp
              </h3>
              <p style="font-size: 15px">2023-Atualmente</p>

              <p style="max-width: 1100px" class="exp-description">
                {{ $t("gwcloud_description_job") }}
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>

      <v-row class="row-custom" id="projects">
        <v-col
          ><span style="color: white; margin-left: 20px; font-size: 35px"
            >Projetos</span
          >
          <hr style="margin-left: 5px; max-width: 99%"
        /></v-col>
      </v-row>
      <v-row>
        <v-col
          ><CardProject
            :title="'Gado na Bahia'"
            :description="$t('cattle_description')"
            :link="'https://gadonabahia.com.br/'"
            :img="'gadonabahia.png'"
          ></CardProject
        ></v-col>
        <v-col
          ><CardProject
            :title="'Site Tecno System'"
            :description="$t('tecno_system_site_description')"
            :link="'https://tecnosystemej.com.br/'"
            :img="'tecnosystem.png'"
          ></CardProject
        ></v-col>
        <v-col
          ><CardProject
            :title="'Jogo da Memória'"
            :description="$t('memorygame_site_description')"
            :link="'https://paulo0056.github.io/memory-game/pages/index.html'"
            :img="'memory-game.png'"
          ></CardProject
        ></v-col>
      </v-row>
      <v-row class="row-custom repo-title">
        <v-col
          ><span style="color: white; margin-left: 20px; font-size: 35px"
            >Repos</span
          >
          <hr style="margin-left: 5px; max-width: 99%"
        /></v-col>
      </v-row>
      <v-row>
        <div class="instruction-arrow-mobile">{{ $t("swipe") }}</div>
        <v-slide-group
          v-model="slideGroup"
          style="padding-left: 10px; padding-right: 8px"
        >
          <template #prev>
            <v-btn color="green" class="mr-4" block rounded="xl" small>
              <v-icon icon="mdi-arrow-left" size="large"
            /></v-btn>
          </template>
          <template #next>
            <v-btn block rounded="xl" small color="green" class="ml-4"
              ><v-icon icon="mdi-arrow-right" color="white" size="25"
            /></v-btn>
          </template>
          <v-slide-group-item>
            <CardRepo
              :title="'TS Node Setup'"
              :description="$t('node_setup_repo')"
              :link="'https://github.com/paulo0056/ts-node-setup'"
              :is-typescript="true"
              :is-node="true"
            ></CardRepo>
          </v-slide-group-item>
          <v-slide-group-item>
            <CardRepo
              :title="'Posts Node'"
              :description="$t('posts_node_repot')"
              :link="'https://github.com/paulo0056/node-posts-study'"
              :is-javascript="true"
              :is-node="true"
            ></CardRepo>
          </v-slide-group-item>
          <v-slide-group>
            <CardRepo
              :title="'Clean Node API'"
              :description="$t('clean_node_api_repo')"
              :link="'https://github.com/paulo0056/clean-node-api'"
              :is-typescript="true"
              :is-node="true"
            ></CardRepo>
          </v-slide-group>
          <v-slide-group>
            <CardRepo
              :title="'User API Node'"
              :description="$t('user_api_node')"
              :link="'https://github.com/paulo0056/user-api-node'"
              :is-typescript="true"
              :is-node="true"
            ></CardRepo>
          </v-slide-group>
          <v-slide-group>
            <CardRepo
              :title="'Pokedex'"
              :description="$t('pokedex_repo')"
              :link="'https://github.com/paulo0056/pokedex-vue3'"
              :is-vue="true"
              :is-typescript="true"
              :is-css="true"
            ></CardRepo>
          </v-slide-group>
          <v-slide-group-item>
            <CardRepo
              :title="'Jogo da Memória'"
              :description="$t('memorygame_repo')"
              :link="'https://github.com/paulo0056/memory-game'"
              :is-html="true"
              :is-css="true"
              :is-javascript="true"
            ></CardRepo>
          </v-slide-group-item>
          <v-slide-group-item>
            <CardRepo
              :title="'Animação da Matrix'"
              :description="$t('matrix_repo')"
              :link="'https://github.com/paulo0056/Matrix-Animation'"
              :is-html="true"
              :is-javascript="true"
              :is-css="true"
            ></CardRepo>
          </v-slide-group-item>
          <v-slide-group-item>
            <CardRepo
              :title="'Calculadora Js'"
              :description="$t('javascript_calculator')"
              :link="'https://github.com/paulo0056/Matrix-Animation'"
              :is-html="true"
              :is-css="true"
              :is-javascript="true"
            ></CardRepo>
          </v-slide-group-item>
          <v-slide-group-item>
            <CardRepo
              :title="'pauloandre.me'"
              :description="$t('pauloandre_repo')"
              :link="'https://github.com/paulo0056/pauloandrejr.me'"
              :is-typescript="true"
              :is-vue="true"
              :is-css="true"
            ></CardRepo>
          </v-slide-group-item>
        </v-slide-group>
      </v-row>
      <v-row class="row-custom" id="contact">
        <v-col
          ><span style="color: white; margin-left: 20px; font-size: 35px">{{
            $t("contact")
          }}</span>
          <hr style="margin-left: 23px; max-width: 95%"
        /></v-col>
      </v-row>

      <v-row justify="center" style="margin-top: 30px">
        <ContactCard
          :title="'Linkedin'"
          :link="'https://www.linkedin.com/in/paulojr-dev/'"
        ></ContactCard>
        <ContactCard
          :title="'Instagram'"
          :link="'https://www.instagram.com/pauloandrejrr/'"
        ></ContactCard>
        <ContactCard
          :title="'WhatsApp'"
          :link="'https://api.whatsapp.com/send?phone=5575992909426'"
        ></ContactCard>
      </v-row>
      <v-row justify="center" style="margin-top: 30px">
        <ContactCard
          :title="'Email: pauloandre.dev@gmail.com'"
          :link="'https://mail.google.com/mail/u/0/#inbox'"
          :width="'420'"
        ></ContactCard>
      </v-row>
      <v-row justify="center" class="row-custom"
        ><span style="color: white; margin-left: 20px" class="rights-reserved"
          >© 2023 Paulo André.</span
        ></v-row
      >
      <v-row justify="center"
        ><span
          style="color: white; margin-left: 20px"
          class="rights-reserved"
          >{{ $t("rights_reserved") }}</span
        ></v-row
      >
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardProject from "../components/CardProject.vue";
import CardRepo from "../components/CardRepo.vue";
import ContactCard from "../components/ContactCard.vue";
import { i18n } from "../main";
const tab = ref<boolean>(false);
const slideGroup = ref<boolean>(false);
const getImageUrl = (name: string | undefined) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
const setLocale = (locale: any) => {
  i18n.global.locale = locale;
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.cdnfonts.com/css/karmatic-arcade");
@import url("https://fonts.cdnfonts.com/css/war-eagle-condensed");

.hire-me-column {
  margin-top: 20px;
}
.name-title {
  font-size: 50px;
  font-weight: 500;
  color: white;
  font-family: "Karmatic Arcade", sans-serif;
}

@media (max-width: 380px) {
  .rights-reserved {
    font-size: 15px;
  }
}
.theme--dark.v-icon {
  color: rgb(8, 228, 8);
}
.theme--dark.v-tabs-items {
  background-color: transparent !important;
}

.theme--light.v-tabs-items {
  background-color: transparent !important;
}
.row-custom {
  margin-top: 150px !important;
}

.vue-logo {
  transform: translateY(20px);
  z-index: 1;
}
.jsts-logo {
  z-index: 1;
  height: 140px;
  max-width: 140px;
  border-radius: 10px;
}
.exp-row {
  margin-left: 0;
}

@media (max-width: 1265px) {
  .instruction-arrow-mobile {
    color: white;
    font-size: 20px;
  }
}
@media (max-width: 620px) {
  .exp-row {
    margin-left: 0px;
  }
  .vue-logo {
    transform: translateY(20px);
    height: 120px;
    max-width: 120px;
    z-index: 1;
  }
  .jsts-logo {
    z-index: 1;
    height: 70px;
    max-width: 70px;
    border-radius: 10px;
  }
}
.img-profile img {
  position: absolute;
  margin-left: 150px;
  z-index: 2;
  max-height: 50%;
  max-width: 30%;
}
#projects {
  font-family: "War Eagle", sans-serif;
}

#contact {
  font-family: "War Eagle", sans-serif;
}
.tab-custom {
  background-color: transparent !important;
}
.title-profile {
  font-size: 45px;
  color: rgb(8, 228, 8);
  font-family: "War Eagle", sans-serif;
}
.repo-title {
  font-family: "War Eagle", sans-serif;
}
.exp-description {
  font-size: 20px;
  font-weight: 400;
}
.exp-title {
  font-family: "War Eagle", sans-serif;
}
.subtitle-profile {
  font-size: 45px;
  font-family: "War Eagle Condensed", sans-serif;
  color: white;
}
.description-profile {
  font-size: 22px;

  color: white;
  font-weight: 300;
}
.app-bg {
  background-color: black;
  height: 100%;
  width: 100%;
}
.navbar {
  z-index: 2;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.616);
  padding: 10px;
  font-size: 22px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  font-weight: bold;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  color: rgb(19, 216, 19);
  cursor: pointer;
}
.icon-flag {
  height: 20px;
  max-width: 20px;
}

/* Main content */
.main {
  font-family: "Oxanium", cursive;
  margin-top: 100px; /* Add a top margin to avoid content overlay */
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
}

/* Config BG Animated*/
$color-bg: #1e1e1e;
$color-particle: #fff;
$spacing: 2560px;
$time-1: 60s;
$time-2: 120s;
$time-3: 180s;
$time-4: 200s;

/* mixins */
@function particles($max) {
  $val: 0px 0px $color-particle;
  @for $i from 1 through $max {
    $val: #{$val}, random($spacing) + px random($spacing) + px $color-particle;
  }
  @return $val;
}

@mixin particles($max) {
  box-shadow: particles($max);
  border-radius: 50%;
}

/* Styles */
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  overflow: hidden;
}

.animation-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.page-bg {
  background: $color-bg;
  background-blend-mode: screen;
  background-size: cover;
  filter: grayscale(100%);
  z-index: -1;
}

.particle,
.particle:after {
  background: transparent;
}

.particle:after {
  position: absolute;
  content: "";
  top: $spacing;
}

.particle-1 {
  animation: animParticle $time-1 linear infinite;
  @include particles(1000);
  height: 2px;
  width: 2px;
}

.particle-1:after {
  @include particles(900);
  height: 2px;
  width: 2px;
}

.particle-2 {
  animation: animParticle $time-2 linear infinite;
  @include particles(800);
  height: 2px;
  width: 2px;
}

.particle-2:after {
  @include particles(500);
  height: 3px;
  width: 3px;
}

.particle-3:after {
  @include particles(1100);
  height: 3px;
  width: 3px;
  border-radius: 50%;
}

.particle-4 {
  animation: animParticle $time-4 linear infinite;
  @include particles(1200);
  height: 1px;
  width: 1px;
}

.particle-4:after {
  @include particles(700);
  height: 1px;
  width: 1px;
}

@keyframes animParticle {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY($spacing * -1);
  }
}

.page-wrapper {
  text-align: center;
  color: #fff;
  z-index: 2;
}

h4 {
  color: #fff;
  font-family: Monoton;
  -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  -moz-animation: neon1 1.5s ease-in-out infinite alternate;
  animation: neon1 1.5s ease-in-out infinite alternate;
}

h4:hover {
  color: #ff1177;
  -webkit-animation: none;
  -moz-animation: none;
  animation: none;
}

/*glow for webkit*/

@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}

/*glow for mozilla*/

@-moz-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}

/*glow*/

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}
</style>
