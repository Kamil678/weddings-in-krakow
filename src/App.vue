<template>
  <Header />
  <MetaTagsManager />
  <router-view />
  <Footer />
</template>
<script setup>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import MetaTagsManager from "./components/shared/MetaTagsManager.vue";
</script>

<style lang="scss">
#app {
  margin-top: 94px;
  height: 100vh;

  @media (min-width: $sm-screen) {
    margin-top: 111px;
  }
}
</style>
