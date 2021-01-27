<template>
  <div>
    <span>张燕</span>
    <sprite-animate
                style="opacity:0.6"
                spriteName="moreSprite"
                :scale="0.5"
                :isTrigger="isTrigger"
                @click="()=>isTrigger=!isTrigger"
              ></sprite-animate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import spriteAnimate from '../components/spriteAnimate/spriteAnimate.vue'
export default defineComponent({
  name: 'Login',
  data(){
    return{
      isTrigger: false,
    }
  },
  components: {
    spriteAnimate
  }
})

</script>
