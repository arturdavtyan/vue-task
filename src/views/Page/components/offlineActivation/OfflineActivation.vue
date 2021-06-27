<template>
  <main>
    <TextMessage v-if="!hasData" />
    <template v-else>
      <Section title="Systems">
        <Table
          :data="data"
          @add-license="addLicense"
          @remove="removeSystem" />
      </Section>
      <Section title="Add System">
        <UploadFile />
      </Section>
    </template>
  </main>
</template>

<script>
export default {
  components: {
    UploadFile: () => import('@/components/uploadFile/UploadFile.vue'),
    Table: () => import('@/components/table/Table.vue')
  },

  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    hasData: Boolean
  },

  methods: {
    addLicense (data) {
      this.$store.commit('Page/addLicense', { tab: 2, data })
    },
    removeSystem (id) {
      this.$store.commit('Page/removeSystem', { id, tab: 2 })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/style.scss';
</style>
