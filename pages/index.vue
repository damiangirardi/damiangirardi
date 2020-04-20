<template>
  <div id="home">
    <section class="bg-green_park">
      <div class="container h-100">
        <div class="row justify-content-center align-items-end h-100">
          <div class="col-md-3 col-8 text-center">
            <router-link to="/masterplan" class="btn-orange mb-5">
              <template v-if="!loadingVideo">
                EXPLORAR
              </template>

              <template v-else>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                  <path opacity="0.2" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                  <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                      C22.32,8.481,24.301,9.057,26.013,10.047z">
                    <animateTransform attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 20 20"
                        to="360 20 20"
                        dur="0.5s"
                        repeatCount="indefinite"/>
                  </path>
                </svg>
              </template>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
  export  default {
     name: 'Home',
     layout: 'default',
     data() {
      return {
        loadingVideo: false
      }
     },
    async created () {
     this.$store.dispatch('getVideo', 'Cam_02_A_1.mp4')
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
      background-color: $orange-default;
    }
  }
</style>