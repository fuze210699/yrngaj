<template>
  <div class="card" :class="{ 'hover:shadow-lg transition-shadow': hover }">
    <div v-if="$slots.header || title" class="card-header" :class="headerClass">
      <div class="flex justify-between items-center">
        <h3 v-if="title" class="text-lg font-medium">{{ title }}</h3>
        <slot name="header"></slot>
        <slot name="header-right"></slot>
      </div>
    </div>
    <div class="card-body" :class="bodyClass">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer" :class="footerClass">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: false
    },
    headerClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    footerClass: {
      type: String,
      default: ''
    }
  }
}
</script> 