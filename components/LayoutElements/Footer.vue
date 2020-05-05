<template>
	<footer>
		<div class="container-fluid px-0">
			<div class="row no-gutters">
				<div class="col-md-6 col-12 breadcrumb-footer">
					<a href="#!" class="text-uppercase">PROYECTO</a>
					<a href="#!" class="text-uppercase" v-if="typeof proyectName !== 'indefined'">{{proyectName}}</a>
					<!-- <a href="#!" class="text-uppercase" v-if="showButtons">{{proyectName}}</a> -->
				</div>
				<div class="col-md-6 col-12 data-footer">
					<div class="row no-gutters">
						<div class="col-8">

							<div class="apto">
								<!-- project view -->
								<div class="apto-box" v-if="$route.name == 'projectdetails'">
									<div class="more">
										<svg viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg"><path fill="#7b7b7b" d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg>
									</div>

									<div class="apto-info" v-show="isAptoInfo">
										<div class="bot">
											<ul>
												<li>
													<img src="~assets/images/icons/fullscreen.svg" alt="m2">
													<p>90.85 m2</p>
												</li>
												<li>
													<img src="~assets/images/icons/bed.svg" alt="recamara">
													<p>1 Recamara</p>
												</li>
												<li>
													<img src="~assets/images/icons/estudio.svg" alt="estudio">
													<p>Estudio</p>
												</li>
												<li>
													<img src="~assets/images/icons/toilet.svg" alt="toilet">
													<p>2.5 Baños</p>
												</li>
												<li>
													<img src="~assets/images/icons/balcon.svg" alt="balcon">
													<p>Balcón</p>
												</li>
												<li>
													<img src="~assets/images/icons/vestidores.svg" alt="vestidor">
													<p>Vestidor</p>
												</li>
												<li>
													<img src="~assets/images/icons/washing-machine.svg" alt="lavanderia">
													<p>Lavandería</p>
												</li>
												<li>
													<img src="~assets/images/icons/sports-car.svg" alt="parking">
													<p>1 Parking</p>
												</li>
											</ul>
											<div class="subtitle">
												<h4>Caracteristícas</h4>
											</div>
										</div>
									</div>
								</div>
							<!-- MASTERPLAN -->
              
							<div class="apto" v-if="$route.name == 'masterplan'">
								<div class="apto-box" v-if="showButtons">
									<template v-if="!toggleBirdAction">
										<a href="#!" @click.prevent="goBirdView()">{{proyectName}} arriba</a>
									</template>
									<template v-else>
										<a href="#!" @click.prevent="outBirdView()">{{proyectName}} abajo</a>
									</template>
								</div>
							</div>

							<!-- TOPVIEW -->
							<div class="apto" v-if="$route.name == 'topview'">
								<div v-if="showButtons" class="apto-box" v-for="(button, i) in buttonFooter" :key="i">
									<a href="#!" @click.prevent="clickButton(button)">{{button.name}}</a>
								</div>

								<!-- <span class="divisor"></span>
								<div class="apto-box">
									<a href="#!" v-b-tooltip.hover.top title="+ Información">APTO. 3A</a>
									<div class="apto-info" v-show="isAptoInfo">
										<div class="bot">
											<ul>
												<li>
													<img src="~assets/images/icons/fullscreen.svg" alt="m2">
													<p>90.85 m2</p>
												</li>
												<li>
													<img src="~assets/images/icons/bed.svg" alt="recamara">
													<p>1 Recamara</p>
												</li>
												<li>
													<img src="~assets/images/icons/estudio.svg" alt="estudio">
													<p>Estudio</p>
												</li>
												<li>
													<img src="~assets/images/icons/toilet.svg" alt="toilet">
													<p>2.5 Baños</p>
												</li>
												<li>
													<img src="~assets/images/icons/balcon.svg" alt="balcon">
													<p>Balcón</p>
												</li>
												<li>
													<img src="~assets/images/icons/vestidores.svg" alt="vestidor">
													<p>Vestidor</p>
												</li>
												<li>
													<img src="~assets/images/icons/washing-machine.svg" alt="lavanderia">
													<p>Lavandería</p>
												</li>
												<li>
													<img src="~assets/images/icons/sports-car.svg" alt="parking">
													<p>1 Parking</p>
												</li>
											</ul>
											<div class="subtitle">
												<h4>Caracteristícas</h4>
											</div>
										</div>
									</div>
								</div> -->
							</div>
						</div>
						<div class="col-2 offset-2">
							<div class="back">
								<span class="divisor"></span>
								<a href="#!" v-b-tooltip.hover.top title="Volver">
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										 viewBox="0 0 438.483 438.483" style="enable-background:new 0 0 438.483 438.483;" xml:space="preserve">
										<g>
											<g>
												<path d="M431.168,230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68
													c-1.536,0-3.072,0.512-4.608,1.536L3.136,171.882c-3.584,2.56-4.096,7.168-1.536,10.752c0.512,0.512,1.024,1.024,1.536,1.536
													l227.84,163.84c3.584,2.56,8.192,1.536,10.752-1.536c1.024-1.536,1.536-3.072,1.536-4.608v-88.064
													c55.296,0,101.888,26.112,118.272,65.536c13.824,33.792,2.56,70.144-30.208,100.352c-3.072,3.072-3.584,7.68-0.512,10.752
													c1.536,1.536,3.584,2.56,5.632,2.56h6.144c1.536,0,3.072-0.512,4.096-1.536C421.952,381.802,454.208,304.49,431.168,230.762z"/>
											</g>
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
	props:{
	    proyectName: String,
	    buttonFooter: {
	      type: Array,
	      default: () => {}
	    },
		showButtons: {
			type: Boolean,
			default: false
		},
		toggleBirdAction:{
			type: Boolean,
			default: false
		}
	},
    data () {
		return {
			isAptoInfo: false,
		}
    },
    watch: {
      $route(to, from) {
      if (this.isAptoInfo) {
          this.toggleAptoinfo()
        }
      }
  	},
    methods: {
      clickButton (event) {
        this.$emit('clickButton', event);
      },
      goBirdView(){
			this.$emit('goBirdView')
		},
		outBirdView(){
			this.$emit('outBirdView')
		}
    }
  }
</script>

<style lang="scss" scoped>
	footer{
		background-color: #dedede;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		.breadcrumb-footer{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			height: 44px;
			a{	
				padding: 0 30px;
				background-color: $orange-default;
				color: #fff;
				font-size: 16px;
				position: relative;
				height: 100%;
				line-height: 44px;
				&:after {
					content: "";
					position: absolute;
					display: inline-block;
					width: 0px;
          height: 0px;
          border-bottom: 22px solid transparent; 
          border-top: 22px solid transparent;
          border-left: 22px solid $orange-default;
          font-size: 0px;
          line-height: 0px;
          right: -22px;
					z-index: 1;
				}
				&:nth-child(2){
					background-color: #212121;
					padding-left: 45px;
					&:after{
						border-left-color: #212121;
					}
				}
				&:nth-child(3){
					background-color: #7b7b7b;
					padding-left: 45px;
					&:after{
						border-left-color: #7b7b7b;
					}
				}
				&:nth-child(4){
					background-color: transparent;
					padding-left: 45px;
					color: #7b7b7b;
					border-right: none;
					&:after{
						border-left-color: #dedede;
						right: -20px;
						@media (max-width: 767px){
							display: none;
						}
					}
					&:before{
						content: "";
						position: absolute;
						display: inline-block;
						width: 0px;
					    height: 0px;
					    border-bottom: 22px solid transparent; 
					    border-top: 22px solid transparent;
					    border-left: 22px solid rgba(123, 123, 123, .5);
					    font-size: 0px;
					    line-height: 0px;
					    right: -22px;
						z-index: 1;
						@media (max-width: 767px){
							display: none;
						}
					}
				}

				&:hover{
					text-decoration: none;
				}

			}
		}
		.data-footer{
			.apto{
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 44px;
				.apto-box{
					position: relative;
					width: 50%;
					&:not(:last-child){
						border-right: 1px solid #7b7b7b;
					}
					a{
						color: #7b7b7b;
						font-weight: 600;
						font-style: italic;
						font-size: 18px;
						text-align: center;
						display: block;
						position: relative;
						&:before{
							content: '';
							width: 0;
							height: 2.5px;
							position: absolute;
							bottom: -8px;
							left: 50%;
							transform: translateX(-50%);
							background-color: $orange-default;
							transition: width .2s ease; 
						}
						&:hover{
							text-decoration: none;
							&:before{
								width: 40%;
							}
						}
					}
					.apto-info{
						position: absolute;
						bottom: 130%;
						background-color: #fff;
						width: 100%;
						.bot{
							ul{
								padding: 0;
								margin: 10px 10px 10px 25px;
								li{
									list-style: none;
									display: flex;
									align-items: center;
									justify-content: flex-start;
									p{
										margin: 0;
										font-size: 14px;
										color: #666;
									}
									img{
										height: 20px;
										margin-right: 10px;
									}
								}
							}
							.subtitle{
								background-color: #212121;
								h4{
									margin: 0 0 0 25px;
									padding: 5px 0;
									color: #ddd;
									font-size: 14px;
								}
							}
						}
					}
					.more{
						width: 30px;
						height: 30px;
						border-radius: 50%;
						border: 2px solid #7b7b7b;
						cursor: pointer;
						color: #7b7b7b;
						display: flex;
						align-items: center;
						justify-content: center;
						&:hover{
							border-color: $orange-default;
							svg{
								path{
									fill: $orange-default;
								}
							}
						}
						svg{
							width: 13px;
						}
					}
				}
			}
			.back{
				height: 44px;
				text-align: right;
				display: flex;
			    justify-content: flex-end;
			    align-items: center;
				svg{
					padding: 5px 25px 5px 20px;
					height: 30px;
					&:before{
						content: '';
						position: absolute;
						left: 0;
						height: 80%;
						background-color: #7b7b7b;
						height: 80%;
						width: 1px;
						display: block;
					}
				}
			}
			.divisor{
				background-color: #7b7b7b;
				height: 80%;
				width: 1px;
			}
		}	
	}
</style>