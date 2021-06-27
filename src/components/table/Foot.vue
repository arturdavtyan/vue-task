<template>
  <tfoot
    v-if="isShow"
    class="table__footer">
    <tr>
      <td class="table__title" colspan="2">Licenses</td>
      <td class="table__title">Expires</td>
      <td class="table__title" colspan="2"></td>
    </tr>
    <tr
      v-for="(subsystem, i) in subsystems"
      :key="i"
      class="table__row">
      <td colspan="2"><div class="table__cell-inner">{{ subsystem.licenses }}</div></td>
      <td><div class="table__cell-inner">{{ subsystem.expires }}</div></td>
      <td colspan="2">
        <div class="table__cell-inner">
          <div class="w-full flex items-center justify-end">
            <SecondaryButton>Download</SecondaryButton>
          </div>
        </div>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
    subsystems: Array
  }
}
</script>
