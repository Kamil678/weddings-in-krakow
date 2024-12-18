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
  margin-top: 94px;
  height: 100vh;

  @media (min-width: $md-screen) {
    margin-top: 111px;
  }
}
</style>
