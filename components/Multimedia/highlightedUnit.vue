<template>
  <img id="target" :src="require(`@/assets/${src}`)">
</template>

<script>
  export default {
    name: "highlightedUnit",
    props: {
      // Source of the image inside the assets directory
      src: {
        type: String,
        required: true
      },
      // Route name to go when click on the highlighted area
      routeName: {
        type: String,
        required: true
      }
    },
    data: function() {
      return {
        ctx: '',
        target: ''
      }
    },
    mounted() {
      this.ctx = document.createElement("canvas").getContext("2d");
      this.target = document.getElementById('target');

      this.target.onmousedown = this.detectClickHighlighted;
      this.target.onmousemove = this.putCursorPointerHighlighted;
    },
    methods: {
      detectClickHighlighted: function (mouseEvent) {
        let alpha = this.getScreenCoords(mouseEvent);

        // If pixel is transparent, go to the target URL
        if (alpha === 0) {
          this.$router.push(this.routeName)
        } else {
          console.log(`not clicked on the target. Alpha: ${alpha}`);
        }
      },
      getScreenCoords: function (mouseEvent) {
        // Get click coordinates
        let x = mouseEvent.pageX - this.target.offsetLeft,
          y = mouseEvent.pageY - this.target.offsetTop,
          w = (this.ctx.canvas.width = this.target.width),
          h = (this.ctx.canvas.height = this.target.height);

        // Draw image to canvas
        // and read Alpha channel value
        this.ctx.drawImage(this.target, 0, 0, w, h);
        return this.ctx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
      },
      putCursorPointerHighlighted: function (mouseEvent) {
        let alpha = this.getScreenCoords(mouseEvent);

        if (alpha === 0) {
          target.style.cursor = 'pointer';
        } else {
          target.style.cursor = 'default';
        }
      }
    }
  };
</script>

<style scoped>
img {
  position: absolute;
  width: 100%;
  height: 99.9vh;
  z-index: 2;
}
</style>
