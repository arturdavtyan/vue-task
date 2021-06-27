<template>
  <button
    class="secondary-button"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SecondaryButton'
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
