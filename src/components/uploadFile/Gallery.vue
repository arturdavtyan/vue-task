<template>
  <div class="images">
    <div
      v-for="(image, index) in images"
      :key="`image-${index}`"
      class="images__item">
      <div
        class="remove"
        @click="$emit('remove-image', index)">
        <img :src="removeIcon" alt="Remove icon">
      </div>
      <img :src="image" :alt="`Image ${index}`">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },

  computed: {
    removeIcon () {
      return require('./svgs/remove.svg')
    }
  }
}
</script>
