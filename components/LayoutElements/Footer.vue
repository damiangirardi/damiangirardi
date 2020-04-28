<template>
	<footer>
		<div class="container-fluid px-0">
			<div class="row no-gutters">
				<div class="col-md-6 col-12 breadcrumb-footer">
					<a href="#!">PROYECTO</a>
					<a href="#!">THE VILLAGE</a>
					<a href="#!">EDIFICIO 1002</a>
				</div>
				<div class="col-md-6 col-12 data-footer">
					<div class="row no-gutters">
						<div class="col-8">
							<div class="apto">
								<div class="apto-box">
									<a href="#!" @click.prevent="toggleAptoinfo()">APTO. 3A</a>
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

								<span class="divisor"></span>

								<div class="apto-box">
									<a href="#!" @click.prevent="toggleAptoinfo()">APTO. 3A</a>
									<!-- <div class="apto-info" v-show="isAptoInfo">
										<div class="title">
											<p>Acceder</p>
										</div>
									</div> -->
								</div>
							</div>
						</div>
						<div class="col-2 offset-2">
							<div class="back">
								<span class="divisor"></span>
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
    	toggleAptoinfo(){
    		this.isAptoInfo = !this.isAptoInfo
    		this.$emit('aptoInfoStatus', this.isAptoInfo)
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
		z-index: 9;
		.breadcrumb-footer{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			height: 44px;
			a{	
				padding: 0 30px;
				background-color: #f36f21;
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
				    border-left: 22px solid #f36f21;
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
					a{
						color: #7b7b7b;
						font-weight: 600;
						font-style: italic;
						font-size: 18px;
						text-align: center;
						display: block;
						&:hover{
							text-decoration: none;
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