<template>
  <Header />
  <router-view />
</template>
<script setup>
import Header from "./components/shared/Header.vue";
</script>

<style lang="scss">
#app {
  margin-top: 150px;
}
</style>
