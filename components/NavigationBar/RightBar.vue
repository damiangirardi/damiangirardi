<template>
  <div class="wrap-right">
    <nav>
      <div class="arrow center-nav"></div>
      <ul ref="scrollContainer">
        <li v-for="(apto, i) in aptos" :key="i" :class="[{sold: apto.sold, select: apto.image === bgImage.path}]"
        @click="toggleImageDepto(apto.image)">
          <div class="link center-nav">
            {{apto.number}}
          </div>
         <div class="background">
           <div class="square"></div>
           <div class="triangle"></div>
         </div>
        </li>
      </ul>
      <div class="arrow center-nav bot"></div>
    </nav>
    <div class="wrap-columnright"></div>
  </div>
</template>

<script>

  export  default {
     name: 'RightBar',
     props:{
      aptos: Array,
      required: true,
      selected: String,
      default: () => {}
     },
     data() {
      return {
        bgImage: {
          path: this.selected
        }
      }
     },
     methods: {
      toggleImageDepto(img){
        this.bgImage.path = img
        this.$emit('bgImagenDepto', this.bgImage.path)
      }
     }
  }
</script>

<style lang="scss" scoped>
.wrap-right {
    width: 90px;
    height: 100vh;
    position: relative;
    float: right;
    z-index: 10;
    display: flex;
  .wrap-columnright {
    width: 65px;
    height: 100vh;
    padding: 50px 1px;
    position: absolute;
    right: 0px;
    z-index: 1;
    background-color: #cccccc;
  }
  nav{
    position: relative;
    flex-direction: column;
    z-index: 3;
    margin-bottom: auto;
    margin-top: auto;
    margin: auto;
    align-items: center;
    height: 77%;
    width: 100%;
    ul{
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 0;
      margin: 0;
      height: 90%;
      width: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
          display: none;
      }
      li{
        color: #0c0c0c;
        font-size: 14px;
        margin: 5px 0;
        padding: 3px 2px;
        position: relative;
        cursor: pointer;
        text-align: center;
        transition: background-color .1s ease;
        &.sold{
          color: black;
        }
        .link {
          width: 69px;
          margin: auto;
          position: relative;
          color: black;
          z-index: 3;
        }
        &.select{
          .background {
            z-index: 2;
            position: absolute;
            width: 94px;
            height: 100%;
            top: 0px;
            display: flex;
            left: 0px;
            flex-direction: row-reverse;
            .square {
              background-color: $orange-default;
              height: 100%;
              width: 80%;
            }
            .triangle {
              width: 0;
              height: 0;
              border-top: 14px solid transparent;
              border-right: 14px solid $orange-default;;
              border-bottom: 14px solid transparent;
            }
          }
        }
        &:hover {
          .link {
            background-color: rgba(243, 112, 39, .4);
          }
        }
      }
    }
    .center-nav {
      position: relative;
      left: 13px;
    }
    .arrow{
      cursor: pointer;
      height: 45px;
      width: 30px;
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: center;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMzNy4wODUgMzM3LjA4NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzM3LjA4NSAzMzcuMDg2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMTY4LjU0LDBDNzUuNjE5LDAsMC4wMTIsNzUuNjA5LDAuMDEyLDE2OC41NDNjMCw5Mi45Myw3NS42MDYsMTY4LjU0MywxNjguNTI4LDE2OC41NDMgICBjOTIuOTMzLDAsMTY4LjUzNC03NS42MTMsMTY4LjUzNC0xNjguNTQzQzMzNy4wNzQsNzUuNjA5LDI2MS40NzMsMCwxNjguNTQsMHogTTI3MS40MDUsMjI0LjMyNyAgIGMtMi40MDcsMi40MDItNS41NjEsMy42MTUtOC43MTMsMy42MTVjLTMuMTU4LDAtNi4zMTEtMS4yMTMtOC43MTktMy42MTVMMTY4LjU0LDEzOC45bC04NS40MjQsODUuNDI3ICAgYy00LjgxNiw0LjgxNS0xMi42MzEsNC44MTUtMTcuNDQ3LDBjLTQuODE5LTQuODE1LTQuODE5LTEyLjYyMiwwLTE3LjQzOGw5NC4xNTItOTQuMTQxYzQuODIyLTQuODE1LDEyLjYxMy00LjgxNSwxNy40MjYsMCAgIGw5NC4xNTIsOTQuMTQxQzI3Ni4yMjEsMjExLjcwNSwyNzYuMjIxLDIxOS41MTIsMjcxLjQwNSwyMjQuMzI3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzI4MjgyOCI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=);
      border-bottom: 1.5px solid #b4b4b4;
      margin: auto;
      padding-bottom: 8px;
      &.bot{
        transform: rotate(180deg);
      }
    }
  }
}
</style>
