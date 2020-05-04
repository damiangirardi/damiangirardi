<template>
  <div id="home" v-if="!loading">
    <section class="bg-green_park" :style="{backgroundImage: 'url(' + require('@/assets/images/' + initialStep.image) + ')'}">
      <div class="container h-100">
        <div class="row justify-content-center align-items-end h-100">
          <div class="col-md-3 col-8 text-center">
            <router-link :to="{ name: 'masterplan'}" class="btn-orange mb-5">EXPLORAR</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export  default {
  name: 'home',
  layout: 'main-layout',
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      initialStep: 'Proyect/initialStep'
    })
  },
  created () {
    this.$store.dispatch('Proyect/startApp')
      .then(() => {
        this.loading = false
        let obj = {
          path: this.initialStep.video
        }
        this.$store.dispatch('Proyect/getVideo', obj)
      })
  },
  methods: {
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
      &:hover {
        text-decoration: none;;
      }
    }
  }
</style>