<template>
  <footer>
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="col-md-6 col-12 breadcrumb-footer">
          <a href="#!" class="text-uppercase">PROYECTO</a>
          <a
            href="#!"
            class="text-uppercase"
            v-if="typeof proyectName !== 'undefined'"
          >{{proyectName}}</a>
          <a href="#!" v-if="floorLoaded.length">
            {{ floorLoaded.number }}
          </a>
          <a href="#!" v-if="$route.name == 'projectdetails'">
            {{ $route.params.permalink }}
          </a>
        </div>
        <div class="col-md-6 col-12 data-footer">
          <div class="row no-gutters">
            <div class="col-8">
              <div class="apto" v-if="$route.name === 'masterplan'">
                <div class="apto-box" v-if="showButtons">
                  <template v-if="!toggleBirdAction">
                    <a
                      href="#!"
                      @click.prevent="goBirdView()"
                      class="text-capitalize"
                      v-if="typeof proyectName !== 'undefined'"
                    >{{proyectName}}</a>
                  </template>
                  <template v-else>
                    <router-link
                      v-b-tooltip.hover.top
                      title="Visitar"
                      class="text-capitalize selected"
                      :to="{name: 'topview'}"
                    >{{proyectName}}</router-link>
                    <!-- <a href="#!" @click.prevent="outBirdView()">{{proyectName}} abajo</a> -->
                  </template>
                </div>
              </div>

              <!-- TOPVIEW -->
              <div class="apto" v-if="$route.name == 'topview' && showButtons">
                <div class="apto-box" v-for="(button, i) in buttonFooter" :key="i">
                  <a href="#!" @click.prevent="clickButton(button)">{{button.name}}</a>
                </div>
              </div>

              <!-- PROJECT DETAILS -->
							<CardDetails v-if="$route.name == 'projectdetails'"></CardDetails>
            </div>
            <div class="col-2 offset-2">
              <div class="back">
                <span class="divisor"></span>
                <a href="#!" v-b-tooltip.hover.top title="Volver">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 438.483 438.483"
                    style="enable-background:new 0 0 438.483 438.483;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M431.168,230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68
													c-1.536,0-3.072,0.512-4.608,1.536L3.136,171.882c-3.584,2.56-4.096,7.168-1.536,10.752c0.512,0.512,1.024,1.024,1.536,1.536
													l227.84,163.84c3.584,2.56,8.192,1.536,10.752-1.536c1.024-1.536,1.536-3.072,1.536-4.608v-88.064
													c55.296,0,101.888,26.112,118.272,65.536c13.824,33.792,2.56,70.144-30.208,100.352c-3.072,3.072-3.584,7.68-0.512,10.752
													c1.536,1.536,3.584,2.56,5.632,2.56h6.144c1.536,0,3.072-0.512,4.096-1.536C421.952,381.802,454.208,304.49,431.168,230.762z"
                        />
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
import CardDetails from  '~/components/UI/CardDetails'
import { mapGetters } from 'vuex'
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
		components: {
			CardDetails
		},
    data () {
      return {
        isAptoInfo: false,
      }
    },
    computed: {
      ...mapGetters({
        floorLoaded: 'Project/floor',
      })
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
footer {
  background-color: #dedede;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  .breadcrumb-footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 44px;
    font-weight: bold;
    a {
      padding: 0 30px;
      background-color: $orange-default;
      color: #fff;
      font-size: 18px;
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
      &:nth-child(2) {
        background-color: #212121;
        padding-left: 45px;
        &:after {
          border-left-color: #212121;
        }
      }
      &:nth-child(3) {
        background-color: #7b7b7b;
        padding-left: 45px;
        &:after {
          border-left-color: #7b7b7b;
        }
      }
      &:nth-child(4) {
        background-color: transparent;
        padding-left: 45px;
        color: #7b7b7b;
        border-right: none;
        &:after {
          border-left-color: #dedede;
          right: -20px;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:before {
          content: "";
          position: absolute;
          display: inline-block;
          width: 0px;
          height: 0px;
          border-bottom: 22px solid transparent;
          border-top: 22px solid transparent;
          border-left: 22px solid rgba(123, 123, 123, 0.5);
          font-size: 0px;
          line-height: 0px;
          right: -22px;
          z-index: 1;
          @media (max-width: 767px) {
            display: none;
          }
        }
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
  .data-footer {
    .apto {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 44px;
      .apto-box {
        position: relative;
        width: 50%;
        &:not(:last-child) {
          border-right: 1px solid #7b7b7b;
        }
        a {
          color: #7b7b7b;
          font-weight: bold;
          font-size: 18px;
          text-align: center;
          display: block;
          position: relative;
          &:before {
            content: "";
            width: 0;
            height: 4px;
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            background-color: $orange-default;
            transition: width 0.2s ease;
          }
          &:hover,
          &.selected {
            text-decoration: none;
            &:before {
              width: 40%;
            }
          }
        }
        .apto-info {
          position: absolute;
          bottom: 130%;
          background-color: #fff;
          width: 100%;
          .bot {
            ul {
              padding: 0;
              margin: 10px 10px 10px 25px;
              li {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                p {
                  margin: 0;
                  font-size: 14px;
                  color: #666;
                }
                img {
                  height: 20px;
                  margin-right: 10px;
                }
              }
            }
            .subtitle {
              background-color: #212121;
              h4 {
                margin: 0 0 0 25px;
                padding: 5px 0;
                color: #ddd;
                font-size: 14px;
              }
            }
          }
        }
        .more {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid #7b7b7b;
          cursor: pointer;
          color: #7b7b7b;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            border-color: $orange-default;
            svg {
              path {
                fill: $orange-default;
              }
            }
          }
          svg {
            width: 13px;
          }
        }
      }
    }
    .back {
      height: 44px;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      svg {
        padding: 5px 25px 5px 20px;
        height: 30px;
        &:before {
          content: "";
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
    .divisor {
      background-color: #7b7b7b;
      height: 80%;
      width: 1px;
    }
  }
}
</style>