<template>
  <div>

    <div id="header" v-if="showHeader" key="header">
      <HeaderComp />
    </div>
  
    <!-- floors select -->
    <RightBar
    :aptos="topview"
    :selected="imageSelected"
    @bgImagenToggle="changeImage($event)"
    />
  
    <!-- background image -->
    <div class="backImage edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + imageSelected ) + ')' }">
    </div>
    
    <!-- background highligh image -->
    <highlighted-unit src="images/edificios/1011-B4-A-highlighted.png" routeName="masterplan" />


    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp
      :showButtons="isHighlighted"
      :buttonFooter="buttonsList"
      @clickButton="updateBackground($event)"
      :proyectName="proyectName" />
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import RightBar from '~/components/NavigationBar/RightBar'
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'
  import highlightedUnit from '~/components/Multimedia/highlightedUnit';

  export  default {
     name: 'Topview',
     layout: 'main-layout',
     components: {
      highlightedUnit,
      RightBar,
      HeaderComp,
      FooterComp
     },
     data() {
      return {
        showHeader: true,
        florSelected: null,
        buttonsList: null,
        imageSelected: '',
        showFooter: true,
        proyectName: 'THE VILLAGE',
        highlighted: false
      }
     },
      computed: {
        ...mapGetters({
          topview: 'Topview/images',
        }),
        isHighlighted(){
          return typeof this.florSelected.highlighted !== 'undefined'
        }
      },
     created() {
        this.$store.dispatch('Topview/getImages')
        this.florSelected = this.topview[0].number
        this.imageSelected = this.topview[0].image
     },
     methods: {
       changeImage (event) {
         this.florSelected = event
         this.imageSelected = event.image
         this.buttonsList = event.highlighted
       },
      updateBackground (event) {
        this.imageSelected = event.image
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-fluid,
  .row{
    height: 100%;
  }
  .build-container {
    height: 99.9vh;
  }
  .back-container {
    position: relative;
    & > img {
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 99.9vh;
    }
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
    top: 0px;
    left: 0px;
    z-index: 0;
  }
</style>
