<template>
  <div id="layout">
    <div id="content">
        <transition name="fade">
            <nuxt />
        </transition>
    </div>
  </div>
</template>

<script>

export default {
    name: 'main-layout',
    data() {
        return {
        }
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
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>