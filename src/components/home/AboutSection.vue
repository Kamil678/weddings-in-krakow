<template>
  <section class="about">
    <div class="about__container">
      <div class="about__container__info">
        <h1>Cześć! Nazywam się Marta Wątor</h1>
      </div>
      <div class="about__container__image">
        <img src="../../assets/home/about-image.webp" alt="Marta Wątor photo" />
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style lang="scss">
.about {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;

    &__info {
      background-color: $primary-color;
      color: #fff;
      height: 100%;
      width: 50%;
      text-align: center;
      padding: 30px;

      h1 {
        font-family: "Cormorant Upright", serif;
        font-weight: 700;
        font-size: 44px;
        line-height: 50px;
      }
    }

    &__image {
      width: 50%;
      height: auto;
    }
  }
}
</style>
