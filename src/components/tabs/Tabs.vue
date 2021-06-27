<template>
  <div class="tabs scrollable scrollable--hover">
    <ul class="tabs__list">
      <Tab
        v-for="(tab, index) in tabs"
        :key="`tab-${index}`"
        :tab="tab"
        :active="value === index"
        @clicked="$emit('input', index)" />
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    Tab: () => import('./Tab.vue')
  },

  props: {
    value: {},
    tabs: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
