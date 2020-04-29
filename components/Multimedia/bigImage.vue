<template>
  <div>
    <img :src="require('assets/images/'+path)" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    path: String
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>