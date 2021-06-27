<template>
  <table :class="['table', { 'space': isShow }]">
    <Head
      :is-show="isShow"
      :index="index" />
    <Body
      :row="row"
      :is-show="isShow"
      @toggle="toggle"
      @add-license="addLicense"
      @remove="$emit('remove', $event)" />
    <Foot
      :is-show="isShow"
      :subsystems="row.subsystems" />
  </table>
</template>

<script>
export default {
  components: {
    Head: () => import('./Head.vue'),
    Body: () => import('./Body.vue'),
    Foot: () => import('./Foot.vue')
  },

  props: {
    row: Object,
    index: Number
  },

  data () {
    return {
      isShow: true
    }
  },

  methods: {
    toggle () {
      this.isShow = !this.isShow
    },
    addLicense (id) {
      const rnd = Math.floor(Math.random() * 10000)
      const data = { cost: '25.00', expires: '22 Nov 2022', licenses: `License ${rnd}`, system_id: id }
      this.$emit('add-license', data)
      this.isShow = true
    }
  }
}
</script>
