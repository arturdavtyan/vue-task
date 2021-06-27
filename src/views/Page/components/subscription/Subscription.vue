<template>
  <main>
    <TextMessage v-if="!hasData" />
  </main>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    hasData: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/style.scss';
</style>
