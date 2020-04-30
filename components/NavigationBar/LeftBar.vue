<template>
  <div>
    <nav>
      <ul>
        <li v-b-tooltip.hover.right title="Plano"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_PLANTA.png" alt="planta"></li>
        <li v-b-tooltip.hover.right title="Vista"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_VISTA 3D.png" alt="vista 3d"></li>
        <li v-b-tooltip.hover.right title="Dimensiones"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_DIMENSIONES.png" alt="dimensiones"></li>
        <li v-b-tooltip.hover.right title="Imágenes"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_IMAGENES.png" alt="imagenes"></li>
        <li v-b-tooltip.hover.right title="Vistas"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_VISTAS.png" alt="vistas"></li>
        <li v-b-tooltip.hover.right title="Acabados"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_ACABADOS.png" alt="acabados"></li>
        <li v-b-tooltip.hover.right title="Vídeos"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_VIDEO.png" alt="videos"></li>
        <li v-b-tooltip.hover.right title="Brochure"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_BROCHURE.png" alt="pdf"></li>
        <li v-b-tooltip.hover.right title="VR 360º"><img src="~/assets/images/icons/ICONOS_MenuIzquierda_VR360.png" alt="vr360"></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export  default {
     name: 'LeftBar',

     data() {
      return {
        message: 'hello world'
      }
     },
     methods: {
     }
  }
</script>

<style lang="scss" scoped>
 nav{
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;
    flex-direction: column;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 2px 0;
    background-color: #e5e5e5;
    ul{
      padding: 0;
      margin: 0;
      li{
        list-style: none;
        padding: 10px;
        cursor: pointer;
        text-align: center;
        transition: background-color .1s ease;
        &:not(:last-child){
          border-bottom: 2px solid #858c91;
        }
        &:hover{
          background-color: rgba(243, 112, 39, 0.6);
          img{
            opacity: 1;
          }
        }
        img{
          height: 17px;
          object-fit: cover;
          opacity: .6;
        }
      }
    }
 }
</style>