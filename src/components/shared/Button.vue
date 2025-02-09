<template>
  <RouterLink
    :to="href"
    @click="$emit('handleClick')"
    class="basic-button"
    aria-label="Przycisk nawigacyjny"
    role="button"
  >
    {{ text }}
  </RouterLink>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

defineEmits(["handleClick"]);
</script>

<style lang="scss">
.basic-button {
  display: block;
  border: none;
  background-color: $primary-color;
  width: fit-content;
  padding: 15px 25px;
  border-radius: 30px;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  @media (min-width: $md-screen) {
    padding: 15px 30px;
  }
}
</style>
