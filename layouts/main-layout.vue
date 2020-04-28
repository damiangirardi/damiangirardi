<template>
  <div id="layout">
      <div id="header" v-if="showHeader">
          <HeaderComp />
      </div>
      <div id="content">
        <transition name="fade">
            <nuxt />
        </transition>
      </div>
      <div id="footer" v-if="showFooter">
          <FooterComp />
      </div>
  </div>
</template>

<script>
import HeaderComp from '~/components/LayoutElements/Header'
import FooterComp from '~/components/LayoutElements/Footer'
export default {
    name: 'main-layout',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            showHeader: false,
            showFooter: false
        }
    },
    created() {
        this.showHeader = typeof this.$route.meta.showHeader != 'undefined' ? this.$route.meta.showHeader : false
        this.showFooter = typeof this.$route.meta.showFooter != 'undefined' ? this.$route.meta.showFooter : false
    },
    mounted() {
        this.$bus.$on('toggleHeader', value => {
            this.showHeader = value
        })
        this.$bus.$on('toggleFooter', value => {
            this.showFooter = value
        })
    }
}
</script>

<style lang="scss" scoped>
#layout {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
    #header {
        width: 100%;
    }
    #content {
        width: 100%;
        background: #333;
        height: 100%;
    }
    #footer {
        width: 100%;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>