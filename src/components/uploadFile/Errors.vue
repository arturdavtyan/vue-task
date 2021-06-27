<template>
  <ul class="errors">
    <li
      v-for="(error, index) in errors"
      :key="`error-${index}`"
      class="errors__item">
      <span class="errors__text">{{ error }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    errors: Array
  }
}
</script>
