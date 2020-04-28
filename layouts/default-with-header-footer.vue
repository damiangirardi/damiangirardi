<template>
  <div>
    <header-comp/>
      
    <!-- main content -->
    
      <nuxt />
   

    <footer-comp/>
  </div>
</template>

<script>
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'

  export default {
    components: {
      HeaderComp,
      FooterComp
    },
    data (){
      return{}
    }
  }
</script>

<style lang="scss" scoped>
  .separator{
    margin-top: 65.39px;
    margin-bottom: 44px;
  }
</style>