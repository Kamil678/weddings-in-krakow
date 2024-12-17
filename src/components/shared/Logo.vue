<template>
  <router-link to="/" class="logo">
    <img
      src="../../assets/shared/logo.png"
      alt="Wedding friends logo"
      class="logo__image"
    />
  </router-link>
</template>
<script setup></script>

<style lang="scss">
.logo {
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  line-height: 26px;
  color: #000;
  font-family: "Caudex", serif;

  &__image {
    width: 200px;

    @media (min-width: $sm-screen) {
      width: 240px;
    }
  }
}
</style>
