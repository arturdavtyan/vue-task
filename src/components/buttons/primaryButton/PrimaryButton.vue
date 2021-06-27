<template>
  <button
    :class="['primary-button', `primary-button--${color}`, { 'primary-button--big': isBig }]"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
const COLORS = ['']

export default {
  name: 'PrimaryButton',

  props: {
    big: {},
    color: {
      type: String,
      validate: color => COLORS.includes(color),
      default: 'primary'
    }
  },

  computed: {
    isBig () {
      return !(this.big === undefined || this.big === false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
