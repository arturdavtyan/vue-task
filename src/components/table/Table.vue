<template>
  <div class="table-wrapper scrollable">
    <div class="table__inner">
      <Row
        v-for="(row, index) in data"
        :key="`row-${index}`"
        :row="row"
        :index="index"
        @add-license="$emit('add-license', $event)"
        @remove="$emit('remove', $event)" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Row: () => import('./Row.vue')
  },

  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
