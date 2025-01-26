<template>
  <a
    :href="href"
    class="contact-box"
    :target="target ? '_blank' : ''"
    :rel="target ? 'noopener noreferrer' : ''"
  >
    <div class="contact-box__icon-container">
      <i class="contact-box__icon-container__icon" :class="icon"></i>
    </div>
    <h4 class="contact-box__title">{{ title }}</h4>
    <p class="contact-box__data" :title="data">{{ data }}</p>
  </a>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  target: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background-color: $gray-color;
  padding: 30px 20px;
  color: #000;
  border-radius: 10px;
  transition: transform 0.3s ease;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
  }

  &__icon-container {
    &__icon {
      font-size: 40px;
      color: $primary-color;
    }
  }

  &__title {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
  }

  &__data {
    width: 100%;
    margin-top: 30px;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
