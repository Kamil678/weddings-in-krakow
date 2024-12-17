<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script setup>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
</script>

<style lang="scss">
#app {
  margin-top: 150px;
  height: 100vh;
}
</style>
