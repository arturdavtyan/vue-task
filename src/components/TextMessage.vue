<template>
  <div class="text-message">
    <span class="text-message__text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextMessage',

  props: {
    message: {
      type: String,
      default: 'There are no data to show!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-message {

    &__text {
      font-style: 18px;
      color: $text-secondary;
    }
  }
</style>
