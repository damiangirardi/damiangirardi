<template>
  <div v-if="!loading">
    <div id="header">
      <HeaderComp />
    </div>

    <LeftBar
      :options="selectedOption"
      @toggleOption="toggleOption($event)"
    ></LeftBar>

    <template v-if="isSlider">
      <SliderImages
        :sliderImg="selectedOption[optionName]"
      ></SliderImages>
    </template>

    <template v-else>
      <div class="backImage edificio-bg" 
        :style="{ backgroundImage: 'url(' + require('@/assets/images/options/' + selectedOption[optionName] ) + ')' }">
      </div>
    </template>

    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp
      :option="options"
      :showButtons="true"
      :proyectName="proyectName" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LeftBar from '~/components/NavigationBar/LeftBar'
  import SliderImages from '~/components/Multimedia/SliderImages'
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'

  export  default {
     name: 'ProyectDetails',
     layout: 'main-layout',
     components: {
      LeftBar,
      SliderImages,
      HeaderComp,
      FooterComp
     },
     data() {
      return {
        showHeader: true,
        showFooter: true,
        proyectName: 'THE VILLAGE',
        isSlider: false,
        optionName: 'planta',
        loading: true
      }
     },
      computed: {
        ...mapGetters({
          options: 'Options/images',
        }),
        selectedOption() {
          if(this.options.length){
           return this.options[0]
          }else{
            return null
          }
        }
      },
     created() {
        this.loading = true
        this.$store.dispatch('Options/getImages')
          .then(() => {
            this.loading = false
          })

     },
     methods: {
       toggleOption (e) {
        this.isSlider = e.sliderOn
        this.optionName = e.selectOption
       }
     },
     mounted() {
     }
  }
</script>

<style lang="scss" scoped>
  .container-fluid,
  .row{
    height: 100%;
  }
  .edificio-bg {
    height: 99.9vh;
    width: 100%;
    position: relative;
    transition: background-image .3s ease-in-out .1s;
  }
  .backImage {
    position: absolute;
    background-size: cover;
    background-position: 0px;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    z-index: 0;
  }
</style>