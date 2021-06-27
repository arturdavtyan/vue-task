<template>
  <thead
    v-if="isShow || index === 0"
    class="table__header">
    <tr>
      <td class="table__title">{{ index === 0 ? 'System Name' : '' }}</td>
      <td class="table__title text-right">{{ index === 0 ? 'ID' : '' }}</td>
      <td class="table__title">Created date</td>
      <td class="table__title text-right">Active Licenses</td>
      <td class="table__title"></td>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
    index: Number
  }
}
</script>
