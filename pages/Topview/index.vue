<template>
  <section class="edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + backgroundUrl + '.jpg') + ')' }">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <LeftBar/>
          <RightBar
          :aptos="aptos"
          @toggleImageDepto="backgroundUrl = 'holaaa'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import RightBar from '~/components/NavigationBar/RightBar'
  import LeftBar from '~/components/NavigationBar/LeftBar'

  export  default {
     name: 'Topview',
     layout: 'default-with-header-footer',
     components: {
      RightBar,
      LeftBar
     },
     data() {
      return {
        backgroundUrl: '1011-B2',
        aptos: [
          {number: '00', sold: false, image: '1011-B1'},
          {number: '01', sold: false, image: '1011-B2'},
          {number: '02', sold: false, image: '1011-B2-A'},
          {number: '03', sold: true,  image: '1011-B2-B'},
          {number: '04', sold: false, image: '1011-B3'},

        ]
      }
     }
  }
</script>

<style lang="scss" scoped>
  .container-fluid,
  .row{
    height: 100%;
  }
  .edificio-bg{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-image: url(~assets/images/edificios/1011-B5.jpg);
    height: 100vh;
    width: 100%;
    position: relative;
  }
</style>