<template>
  <div class="about">
    <FeelingLucky />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FeelingLucky from '@/components/FeelingLucky.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FeelingLucky
  },
}
</script>
