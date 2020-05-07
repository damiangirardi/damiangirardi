<template>
  <div>
    <nav>
      <ul>
        <li v-if="options.planta"
          @click.prevent="toggleOption('planta', false)" 
          v-b-tooltip.hover.right title="Planta">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_PLANTA.png" alt="planta">
        
        </li>
        <li v-if="options.vista3d"
          @click.prevent="toggleOption('vista3d', false)" 
          v-b-tooltip.hover.right title="Vista">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_VISTA 3D.png" alt="vista 3d">
        
        </li>
        <li v-if="options.dimensiones"
          @click.prevent="toggleOption('dimensiones', false)" 
          v-b-tooltip.hover.right title="Dimensiones">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_DIMENSIONES.png" alt="dimensiones">
        
        </li>
        <li v-if="options.imagenes"
          @click.prevent="toggleOption('imagenes', true)" 
          v-b-tooltip.hover.right title="Imágenes">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_IMAGENES.png" alt="imagenes">
        
        </li>
        <li v-if="options.vistas"
          @click.prevent="toggleOption('vistas', true)" 
          v-b-tooltip.hover.right title="Vistas">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_VISTAS.png" alt="vistas">
        
        </li>
        <li v-if="options.acabados"
          @click.prevent="toggleOption('acabados', true)" 
          v-b-tooltip.hover.right title="Acabados">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_ACABADOS.png" alt="acabados">
        
        </li>
        <li v-if="options.videos"
          @click.prevent="toggleOption('videos', false)" 
          v-b-tooltip.hover.right title="Vídeos">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_VIDEO.png" alt="videos">
        
        </li>
        <li v-if="options.brochure"
          @click.prevent="toggleOption('brochure', false)" 
          v-b-tooltip.hover.right title="Brochure">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_BROCHURE.png" alt="pdf">
        
        </li>
        <li v-if="options.vr360"
          @click.prevent="toggleOption('vr360', false)" 
          v-b-tooltip.hover.right title="VR 360º">
          
          <img src="~/assets/images/icons/ICONOS_MenuIzquierda_VR360.png" alt="vr360">
        
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export  default {
     name: 'LeftBar',
     props:{
      options: {
        type: Object,
        default: {}
      }
     },
     data() {
      return {
        selectOption: null,
        sliderOn: false
      }
     },
     methods: {
      toggleOption(name, bool) {
        this.selectOption = name
        this.sliderOn = bool
        this.$emit('toggleOption', {'selectOption': this.selectOption, 'sliderOn': this.sliderOn})
      }
     }
  }
</script>

<style lang="scss" scoped>
 nav{
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 10;
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
          height: 21px;
          object-fit: cover;
          opacity: .8;
        }
      }
    }
 }
</style>
