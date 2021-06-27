<template>
  <section class="section">
    <div
      v-if="hasTitle"
      class="section__title">
      <h2 class="section__text">{{ title }}</h2>
    </div>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',

  props: {
    title: String
  },

  computed: {
    hasTitle () {
      return !!this.title
    }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    padding: 0px 0 45px;

    &__title {
      margin-bottom: 24px;
    }
    &__text {
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
