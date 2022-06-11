<template>
  <the-header/>
  <div class="container">
    <router-view></router-view>
  </div>

</template>


<script>
import TheHeader from './components/nav/TheHeader.vue'

export default {
  components:{TheHeader}
}

</script>


<style>

*{
  box-sizing: border-box;
}

html{
  font-family: sans-serif;
}


body{
  margin:0;
  padding: 0;
}

.container{
  max-width: 50rem;
  margin: 6rem auto;
}

</style>