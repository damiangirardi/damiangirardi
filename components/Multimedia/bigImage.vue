<template>
  <img :src="path" alt=""  width="100%" height="100%">
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
  height: 100%;
  object-fit: cover;
}
</style>