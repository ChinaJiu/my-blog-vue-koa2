<template>
  <!-- eslint-disable vue/require-component-is -->
  <div v-bind="linkProps(to)">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps (url) {
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
