<template>
  <div class="upload-file">
    <input
      type="file"
      accept=".jpeg, .jpg, .png"
      multiple
      title
      class="upload-file__input"
      @change="changeInput" />
    <div
      v-if="!files.length"
      class="upload-file__content">
      <div class="upload-file__icon">
        <img :src="arrowDownIcon" alt="Arrow down">
      </div>
      <p class="upload-file__text">
        <span>Choose a file</span> to upload or drag it here (jpg, png, max size 5mb)
      </p>
    </div>
    <Gallery
      v-else
      :images="images"
      @remove-image="removeImage" />
    <Errors v-if="hasError" :errors="errors" />
  </div>
</template>

<script>
const _5MB = 5242880
const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

function filterByType (file) {
  const isValid = allowedTypes.includes(file.type)

  if (!isValid) {
    this.errors.push('The type of the uploaded file should be .jpeg, .jpg or .png')
    return false
  }

  return true
}

function filterBySize (file) {
  const isValid = file.size <= _5MB

  if (!isValid) {
    this.errors.push('The image maximum size is 5MB')
    return false
  }

  return true
}

function filterByExisting (file) {
  return this.files.every(f => f.lastModified !== file.lastModified)
}

export default {
  components: {
    Gallery: () => import('./Gallery.vue'),
    Errors: () => import('./Errors.vue')
  },

  data () {
    return {
      files: [],
      errors: []
    }
  },

  computed: {
    arrowDownIcon () {
      return require('./svgs/arrow-down.svg')
    },
    images () {
      return this.files.map(file => URL.createObjectURL(file))
    },
    hasError () {
      return this.errors.length > 0
    }
  },

  methods: {
    removeImage (index) {
      this.files = this.files.filter((e, i) => i !== index)
      this.errors = []
    },

    changeInput (e) {
      this.errors = []
      if (!e.target.files.length) return

      const filtered = Array
        .from(e.target.files)
        .filter(filterByType, this)
        .filter(filterBySize, this)
        .filter(filterByExisting, this)
      this.files = [...this.files, ...filtered]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
