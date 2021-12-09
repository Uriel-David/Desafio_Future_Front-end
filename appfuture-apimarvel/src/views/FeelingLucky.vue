<template>
  <div class="about">
    <h1>This is an about page</h1>
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
