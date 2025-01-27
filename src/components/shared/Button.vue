<template>
  <RouterLink :to="href" @click="$emit('handleClick')" class="basic-button">{{
    text
  }}</RouterLink>
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
  line-height: 20px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: $md-screen) {
    font-size: 20px;
    line-height: 22px;
    padding: 20px 30px;
  }
}
</style>
