<template>
  <div class="container">
    <PageHeader />
    <Tabs
      :tabs="tabsNames"
      v-model="activeTabIndex" />
    <KeepAlive>
      <Component
        :is="activeComponentName"
        :data="activeComponentData"
        :has-data="hasData" />
    </KeepAlive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Dynamic components
const dynamicComponents = {
  Subscription: () => import('./components/subscription/Subscription'),
  Outright: () => import('./components/outright/Outright'),
  OfflineActivation: () => import('./components/offlineActivation/OfflineActivation')
}

export default {
  components: {
    PageHeader: () => import('@/components/pageHeader/PageHeader.vue'),
    Tabs: () => import('@/components/tabs/Tabs.vue'),

    // Dynamic components
    ...dynamicComponents
  },

  data () {
    return {
      activeTabIndex: 2
    }
  },

  computed: {
    ...mapGetters({
      tabs: 'Page/tabs'
    }),
    tabsNames () {
      return this.tabs.map(tab => tab.title)
    },
    tabsData () {
      return this.tabs.map(tab => tab.data)
    },
    dynamicComponentsNames () {
      return Object.keys(dynamicComponents)
    },
    activeComponentName () {
      return this.dynamicComponentsNames[this.activeTabIndex]
    },
    activeComponentData () {
      const { systems = [], subsystems = [] } = this.tabsData[this.activeTabIndex] || {}

      return systems.map(s => ({
        ...s,
        subsystems: subsystems.filter(sub => s.id === sub.system_id)
      }))
    },
    hasData () {
      if (!Array.isArray(this.activeComponentData)) return false

      return this.activeComponentData.length > 0
    }
  }
}
</script>
