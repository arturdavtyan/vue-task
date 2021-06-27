<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__title">
        <h1 class="header__text">{{ pageTitle }}</h1>
      </div>
      <div class="header__right-side">
        <Plans
          :plans="plansTransformed"
          class="header__plans" />
        <PrimaryButton
          big
          class="header__button">Upgrade Now</PrimaryButton>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Plans: () => import('@/components/plans/Plans.vue')
  },

  computed: {
    ...mapGetters({
      pageTitle: 'Page/pageTitle',
      plans: 'Page/plans'
    }),
    plansTransformed () {
      const colors = ['#499861', '#598B8D', '#DA9422']
      return this.plans.map((plan, index) => ({
        ...plan,
        color: colors[index]
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
