<template>
  <canvas style="cursor: pointer" :ref="spriteName" :height="height * scale" :width="width * scale" :scale="0.5">
  </canvas>
</template>

<script>
import more from '../../assets/sprite/more.png'
import createjs from 'createjs-module'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SpriteAnimate',
  props: {
    // id
    spriteName: {
      type: String,
      require: true
    },
    // canvas的宽
    height: {
      type: String,
      default: '40'
    },
    // canvas的高
    width: {
      type: String,
      default: '40'
    },
    // sprite，canvas同时缩放
    scale: {
      type: Number,
      default: 1
    },
    //控制变化
    isTrigger: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      instance: null,
      spriteData: null
    }
  },
  mounted() {
    // 生成容器
    const moreCVS = this.$refs[this.spriteName]

    const stage = new createjs.Stage(moreCVS)

    // createjs配置
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    createjs.Ticker.addEventListener('tick', stage)

    // 绑定动画
    switch (this.spriteName) {
      case 'moreSprite':
        this.spriteData = {
          framerate: 28,
          images: [more],
          frames: [
            [0, 0, 64, 32, 0, 0, -11],
            [64, 0, 64, 32, 0, 0, -11],
            [128, 0, 64, 32, 0, 0, -11],
            [192, 0, 64, 32, 0, 0, -11],
            [256, 0, 64, 32, 0, 0, -11],
            [320, 0, 64, 32, 0, 0, -11],
            [384, 0, 64, 32, 0, 0, -11],
            [448, 0, 64, 32, 0, 0, -11],
            [512, 0, 64, 32, 0, 0, -11],
            [576, 0, 64, 32, 0, 0, -11],
            [640, 0, 64, 32, 0, 0, -11],
            [704, 0, 64, 32, 0, 0, -11],
            [768, 0, 64, 32, 0, 0, -11],
            [832, 0, 64, 32, 0, 0, -11],
            [896, 0, 64, 32, 0, 0, -11]
          ],
          animations: {
            //开始， 结束， 下一个， 速度
            start: 0,
            end: 7,
            go: [0, 7, 'end'],
            back: [7, 14, 'start', 1.5]
          }
        }
        break
    }

    const instanceSpriteSheet = new createjs.SpriteSheet(this.spriteData)

    this.instance = new createjs.Sprite(instanceSpriteSheet)

    this.instance.scaleX *= this.scale
    this.instance.scaleY *= this.scale
    stage.addChild(this.instance)
  },
  watch: {
    isTrigger: function (val) {
      if (val === false) {
        this.instance.gotoAndPlay('back')
      } else {
        this.instance.gotoAndPlay('go')
      }
    }
  }
})
</script>

<style></style>
