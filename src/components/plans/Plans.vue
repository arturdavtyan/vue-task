<template>
  <div class="plans">
    <Plan
      v-for="(plan, index) in plans"
      :key="`plan-${index}`"
      :plan="plan" />
  </div>
</template>

<script>
export default {
  components: {
    Plan: () => import('./Plan.vue')
  },

  props: {
    plans: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
