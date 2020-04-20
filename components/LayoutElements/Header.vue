<template>
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
						<span>MENU</span>
					</div>
				</div>
				<div class="col-4 text-center">
					<img src="~assets/images/logo_green_park.png" alt="green park logo" class="logo">
				</div>
				<div class="col-4 d-flex align-items-center justify-content-end">
					<div class="icon">
						<img src="~assets/images/icons/ICONOS_MenuArriba_COMPARTIR.png" alt="compartir">
					</div>
					<div class="icon">
						<img src="~assets/images/icons/ICONOS_MenuArriba_CONTACTO.png" alt="contacto">
					</div>
					<div class="icon">
						<img src="~assets/images/icons/ICONOS_MenuArriba_WHATSAPP.png" alt="whats app">
					</div>
					<div class="icon">
						<img src="~assets/images/icons/ICONOS_MenuArriba_FAVORITOS.png" alt="favoritos">
					</div>
					<div class="icon border-none">
						<img src="~assets/images/icons/ICONOS_MenuArriba_RESEVAR.png" alt="reservar">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-9 menu-lateral">
					<nav>
						<ul>
							<li><a href="#!">Inicio</a></li>
							<li><a href="#!">Masterplan</a></li>
							<li class="d-flex justify-content-between"><a href="#!">Proyectos</a> <span>+</span></li>
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
			</div>
		</div>
	</header>
</template>

<script>
	export default {
    data (){
      return{
      	isMenuOpen: false,
      }
    },
    watch: {
    	$route(to, from) {
			if (this.isMenuOpen) {
				this.toggleMenuOpen()
			}
		}
  	},
    methods: {
    	toggleMenuOpen(){
    		this.isMenuOpen = !this.isMenuOpen
    		this.$emit('menuStatus', this.isMenuOpen)
    	}
    }
  }
</script>

<style lang="scss" scoped>
	header{
		background-color: #fff;
		padding: 15px 0;

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
							display: none;
							opacity: 0;
							transform: rotate(45deg);
							transition: opacity .2s ease .2s, transform .2s ease .2s;
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
								opacity: 1;
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
			width: 100%;
			position: absolute;
			left: 0;
			top: 65.39px;
			bottom: 0;
			display: flex;
		    flex-direction: column;
		    justify-content: space-between;
			z-index: 5;
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
							&:before{
								content: '';
								background-repeat: no-repeat;
								background-position: center;
								background-size: 14px;
								// background-image:
								width: 15px;
								height: 15px;

							}
							&:hover{
								text-decoration: none;
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

	}
</style>