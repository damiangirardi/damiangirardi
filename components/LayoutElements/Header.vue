<template>
	<div>
		<header>
			<div class="container-fluid">
				<div class="row">
					<div class="col-4">
						<div class="menu" @click="toggleMenuOpen()" :class="{isOpen: isMenuOpen}">
							<div class="lines">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<span key="menu-text" v-if="!isMenuOpen">MENU</span>
							<span key="menu-text-out" v-else>CERRAR</span>
						</div>
					</div>
					<div class="col-4 text-center">
						<img src="~assets/images/logo_green_park.png" alt="green park logo" class="logo">
					</div>
					<div class="col-4 d-flex align-items-center justify-content-end">
						<div class="icon" v-b-tooltip.hover title="Compartir">
							<img src="~assets/images/icons/ICONOS_MenuArriba_COMPARTIR.png" alt="compartir">
						</div>
						<div class="icon" v-b-tooltip.hover title="Contactarnos"  @click="toggleModal('contacto')">
							<img src="~assets/images/icons/ICONOS_MenuArriba_CONTACTO.png" alt="contacto">
						</div>
						<div class="icon" v-b-tooltip.hover title="Contactanos por Whatsapp">
							<img src="~assets/images/icons/ICONOS_MenuArriba_WHATSAPP.png" alt="whats app">
						</div>
						<div class="icon" v-b-tooltip.hover title="Agregar a mis favoritos">
							<img src="~assets/images/icons/ICONOS_MenuArriba_FAVORITOS.png" alt="favoritos">
						</div>
						<div class="icon border-none" v-b-tooltip.hover title="Reservar">
							<img src="~assets/images/icons/ICONOS_MenuArriba_RESEVAR.png" alt="reservar">
						</div>
					</div>
				</div>
				<div class="row position-relative">
					<transition-group key="menu" name="slide-left" mode="out-in">
						<div key="menu-1" class="col-md-4 col-9 menu-lateral" v-if="isMenuOpen"> 
							<nav>
								<ul>
									<li><a href="#!">Inicio</a></li>
									<li><a href="#!">Masterplan</a></li>
									<li class="d-flex justify-content-between"><a @click.prevent="toggleSubMenuOpen()" href="#!">Proyectos</a> <span>+</span></li>
									<li><a href="#!">Ubicación</a></li>
									<li><a href="#!">Brochure</a></li>
									<li><a href="#!">Ayuda</a></li>
									<li><a href="#!">Contacto</a></li>
								</ul>
							</nav>
							<div class="social">
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 width="25" height="25" viewBox="0 0 97.75 97.75" xml:space="preserve">
									<g>
										<path fill="#888888" d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
											 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
											h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"/>
									</g>
								</svg>

								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 width="25" height="25" viewBox="0 0 97.75 97.75" xml:space="preserve">
									<g>
										<path fill="#888888" d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
											 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
											h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"/>
									</g>
								</svg>

								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 width="25" height="25" viewBox="0 0 97.75 97.75" xml:space="preserve">
									<g>
										<path fill="#888888" d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
											 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
											h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"/>
									</g>
								</svg>

								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 width="25" height="25" viewBox="0 0 97.75 97.75" xml:space="preserve">
									<g>
										<path fill="#888888" d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
											 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
											h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"/>
									</g>
								</svg>
							</div>
						</div>
						<transition-group key="menu-2" name="slide-left-short" mode="out-in">
							<div key="menu-3" class="col-md-3 offset-md-4 offset-9 col-3 menu-lateral-gray" v-if="isSubMenuOpen">
								<nav>
									<ul>
										<li><a href="#!">Proyecto 1</a></li>
										<li><a href="#!">Proyecto 2</a></li>
										<li><a href="#!">Proyecto 3</a></li>
									</ul>
								</nav>
							</div>
						</transition-group>
					</transition-group>
				</div>
			</div>
		</header>
		<div :class="{over: isMenuOpen}"/>

		<!-- modals -->

		<transition
	      name="modal"
	      mode="out-in">
	      <div
	        v-if="showModal != ''"
	        class="preview-modal">
	        <!-- CONTAINER -->
	        <div
	          class="preview-modal__container"
	          @click="$event.stopPropagation();">

	          <!-- body modal -->
	          <!-- contacto -->
	          <div class="preview-modal__body">
	          	<div class="close-modal" @click="showModal = ''">x</div>
	            <div class="row">
	            	<div class="col-12">
	            		<h3 class="title text-center">Contacto</h3>
	            	</div>
	            	<div class="col-md-12 input-box">
	            		<label for="name">Nombre*</label>
	            		<input type="text" name="name">
	            	</div>
	            	<div class="col-md-12 input-box">
	            		<label for="email">Email*</label>
	            		<input type="text" name="email">
	            	</div>
	            	<div class="col-md-12 input-box">
	            		<label for="phone">Telefono*</label>
	            		<input type="number" name="phone">
	            	</div>
	            	<div class="col-md-12 input-box">
	            		<label for="info">Solicitar más información de:</label>
	            		<input type="text" name="info">
	            	</div>
	            	<div class="col-md-12 input-box">
	            		<label for="msg">Mensaje*</label>
	            		<textarea type="text" name="msg"/>
	            	</div>
	            	<div class="col-12 text-center">
	            		<button class="my-3">Enviar</button>
	            	</div>
	            </div>
	          </div>

	        </div>
	        <!-- CONTAINER END -->

	      </div>
	    </transition>
	</div>
</template>

<script>
	export default {
    data (){
      return{
      	isMenuOpen: false,
      	isSubMenuOpen: false,
      	showModal: ''
      }
    },
    watch: {
    	$route(to, from) {
			if (this.isMenuOpen) {
				this.toggleMenuOpen()
			}
			if (this.isSubMenuOpen) {
				this.toggleSubMenuOpen()
			}

		}
  	},
    methods: {
    	toggleMenuOpen(){
    		this.isMenuOpen = !this.isMenuOpen
    		this.$emit('menuStatus', this.isMenuOpen)
    		if (this.isSubMenuOpen){
    			this.isSubMenuOpen = false
    		}
    	},
    	toggleSubMenuOpen(){
    		this.isSubMenuOpen = !this.isSubMenuOpen
    		this.$emit('subMenuStatus', this.isSubMenuOpen)
    	},
    	toggleModal(modal){
    		if (this.showModal === ''){
    			this.showModal = modal
    		}
    	}
    }
  }
</script>

<style lang="scss" scoped>
	header{
		background-color: #fff;
		padding: 15px 0;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		.menu{
			display: flex;
			align-items: center;
			cursor: pointer;
			>span{
				margin-left: 10px;
				font-size: 14px;
				color: #515151;
			}
			.lines{
				width: 25px;
				height: 30px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
				span{
					display: block;
					height: 2px;
					border-radius: 5px;
					background-color: #333;
					transition: opacity .2s ease;
					&:nth-child(2){
						margin: 8px 0;
						transition: margin .2s ease, transform .2s ease .2s;
						&:before{
							content: '';
							width: 100%;
							height: 2px;
							border-radius: 5px;
							background-color: #333;
							display: inline-block;
							transform: rotate(0);
							transition: opacity .2s ease .2s, transform .2s ease .2s;
							position: absolute;
						}
					}
				}
			}
			&.isOpen{
				.lines{
					span{
						opacity: 0;
					&:nth-child(2){
						margin: 0;
						opacity: 1;
						transform: rotate(-45deg);
							&:before{
								display: block;
								transform: rotate(90deg);
							}
						}
					}
				}
			}
		}

		.logo{
			height: 30px;
		}
		.icon{
			cursor: pointer;
			padding: 5px 15px;
			border-right: 1px solid #333;
			transition: background-color .2s ease;
			&:hover{
				background-color: rgba(53, 53, 53, .1);
			}
			&.border-none{
				border-right: none;
			}
			img{
				width: 20px;
				object-fit: cover;
			}
		}

		.menu-lateral{
			height: 100vh;
			background-color: #dedede;
			width: 80%;
			position: absolute;
			left: 0;
			top: 5px;
			bottom: 0;
			display: flex;
		    flex-direction: column;
		    justify-content: space-between;
			z-index: 5;
			transition: all .2s ease;
			@media (max-height: 600px){
				overflow-y: scroll;
			}
			nav{
				ul{
					padding: 0;
					margin: 0;
					li{
						list-style: none;
						padding: 20px 0;
						border-bottom: 1px solid #d3d3d3;
						a{
							color: #999999;
							font-size: 18px;
							position: relative;
							padding-left: 0;
							transition: padding-left .2s ease;
							&:before{
								content: '';
								background-repeat: no-repeat;
								background-position: center;
								background-size: cover;
								background-image: url(~assets/images/icons/iconfinder_icon-ios7-arrow-right_211607.svg);
								width: 15px;
    							height: 20px;
								position: absolute;
								left: 2px;
								top: 2px;
								opacity: 0;
								transition: left .2s ease, opacity .2s ease;

							}
							&:hover{
								text-decoration: none;
								padding-left: 20px;
								&:before{
									left: 0;
									opacity: 1;
								}
							}
						}
						span{
							color: #f26f27;
							font-size: 24px;
							font-weight: 600;
							padding-right: 5px;
						}
					}
				}
			}
			.social{
				text-align: right;
				padding: 20px 0;
				border-top: 1px solid #a8a8a8;
				svg{
					margin: 0 7px;
				}
			}
		}

		.menu-lateral-gray{
			@media (max-height: 600px){
				overflow-y: scroll;
			}
			background-color: #212121;
			top: 15px;
			width: 100%;
			height: 100vh;
			position: absolute;
			z-index: 5;
			nav{
				ul{
					padding: 0;
					margin: 0;
					li{
						list-style: none;
						padding: 20px 0;
						&:not(:last-child){
							border-bottom: 1px solid #2e2e2e;
						}
						a{
							color: #6d6d6d;
							font-size: 18px;
							position: relative;
							padding-left: 0;
							transition: padding-left .2s ease;
							&:hover{
								text-decoration: none;
								color: #ddd;
							}
						}
					}
				}
			}
		}

	}

	.over{
		&:after{
			content: '';
		    background-color: rgba(0, 0, 0, 0.5);
		    position: fixed;
		    z-index: 4;
		    width: 100%;
		    top: 0;
		    height: 100vh;
		}
	}

	.preview-modal {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: rgba(50, 50, 50, 0.5);
	  z-index: 999;
	  .close-modal{
	  	position: absolute;
	  	top: 0;
	  	right: 10px;
	  	font-size: 28px;
	  	color: #333;
	  	transition: transform .2s ease;
	  	cursor: pointer;
		z-index: 4;
		text-align: center;
		width: 25px;
	  	&:hover{
	  		transform: scale(.9);
	  	}
	  }

	  .preview-modal__container {
	    width: 60%;
	    border-radius: 4px;
	    background-color: #cdcdcb;
	    box-shadow: 0 3px 6px 0 #666;
	    max-width: 95%;
	    margin: auto;
	    text-align: left;
	    @media screen and (max-width: 767px) {
	      width: 95%;
	    }


	    .preview-modal__body {
			padding: 15px;
			position: relative;
			overflow: auto;
			height: 90vh;
			overflow: auto;
	     	.input-box{
	     		display: flex;
	     		flex-direction: column;
	     		margin-bottom: 25px;
	     		input,
	     		textarea{
	     			width: 100%;
	     			background-color: #efefef;
	     			border: none;
	     			padding: 5px 10px;
	     			&:focus{
	     				outline-style: none;
	     			}
	     		}
	     		textarea{
	     			height: 150px;
	     		}
	     	}
	    }
	  }
	  button{
	  	border: none;
	  	background-color: $orange-default;
	  	color: #fff;
	  	font-size: 16px;
	  	width: 180px;
	  	padding: 10px 0;
	  }
	}

	// transitions

	.slide-left-enter-active,
  	.slide-left-leave-active {
    	transition: all 0.4s ease;
  }
  	.slide-left-enter {
	  transform: translateX(-100px);
  }
  	.slide-left-leave-to{
  		 transform: translateX(-100%);
  }
  	.slide-left-short-enter-active,
  	.slide-left-short-leave-active {
    	transition: all 0.4s ease;
  }
  	.slide-left-short-enter {
  		transform: translateX(-5px);
	  opacity: 0;
  }
  	.slide-left-short-leave-to{
  		transform: translateX(-10px);
  		opacity: 0;
  }

  	.modal-enter-active,
  	.modal-leave-active {
    	transition: all 0.2s ease;
  }
  	.modal-enter {
	  opacity: 0;
  }
  	.modal-leave-to{
  		opacity: 0;
  }


</style>