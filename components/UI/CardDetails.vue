<template>
  <div class="apto">
    <div class="apto-box">
      <div class="more" @click="showMenu()">
        <svg viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#7b7b7b"
            d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"
          />
        </svg>
      </div>
      <div class="apto-info" v-if="menuVisible">
        <div class="bot">
          <ul>
            <li v-for=" (item, i) in details" :key="i">
              <img :src="require('assets/images/icons/'+item.img)"  :alt="item.alt" />
              <p>{{item.text}}</p>
            </li>
          </ul>
          <div class="subtitle">
            <h4>Caracteristícas</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cardDetails',
  data: () => {
    return {
      menuVisible: false
    }
  },
  computed: {
    ...mapGetters({
      details: 'Proyect/details',
    })
  },
  created () {
    this.$store.dispatch('Proyect/getDetailsApto');
  },
  methods: {
    showMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>