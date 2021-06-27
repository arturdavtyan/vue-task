<template>
  <li
    :class="['tabs__item', { 'tabs__item--active': active }]">
    <span
      class="tabs__text"
      @click="$emit('clicked')">{{ tab }}</span>
  </li>
</template>

<script>
export default {
  props: {
    tab: {},
    active: Boolean
  }
}
</script>
