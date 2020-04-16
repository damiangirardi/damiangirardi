<template>
  <div id="home">
    <section class="bg-green_park">
      <div class="container h-100">
        <div class="row justify-content-center align-items-end h-100">
          <div class="col-3 text-center">
            <router-link :to="{name: 'masterplan'}" class="btn-orange mb-5">Explorar</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export  default {
     name: 'Home',
     layout: 'default-with-header-footer',
     data() {
      return {

      }
     }
  }
</script>

<style lang="scss" scoped>
  #home{
    .h-100{
      height: 100%;
    }
    .bg-green_park{
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-image: url(~assets/images/home_green_park.jpg);
      height: 100vh;
      width: 100%;
    }
    .btn-orange{
      border: none;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      width: 185px;
      color: #fff;
      background-color: #f36f21;
    }
  }
</style>