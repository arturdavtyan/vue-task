<template>
  <tbody class="table__body">
    <tr class="table__row">
      <td style="min-width: 240px;">
        <div class="table__cell-inner">
          <div
            class="triangle-box"
            @click="$emit('toggle')">
            <div :class="['triangle', { 'open': isShow }]"></div>
          </div>
          <span>{{ row.system_name }}</span>
        </div>
      </td>
      <td style="min-width: 100px;"><div class="table__cell-inner justify-end">{{ row.id }}</div></td>
      <td style="min-width: 130px;"><div class="table__cell-inner">{{ row.created_date }}</div></td>
      <td style="min-width: 110px; max-width: 130px;"><div class="table__cell-inner justify-end">{{ row.active_licenses }}</div></td>
      <td style="min-width: 200px;">
        <div class="table__cell-inner">
          <div class="w-full flex items-center justify-end">
            <PrimaryButton
              color="success"
              class="mr-5"
              @click="$emit('add-license', row.id)">Add License</PrimaryButton>
            <PrimaryButton
              color="danger"
              @click="$emit('remove', row.id)">Remove</PrimaryButton>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
    row: Object
  }
}
</script>
