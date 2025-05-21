<template>
  <span 
    class="badge" 
    :class="[
      `badge-${type}`, 
      { 'px-3 py-1': size === 'md', 'px-1.5 py-0.5': size === 'sm' }
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    type: {
      type: String,
      default: 'blue',
      validator: (value) => ['blue', 'green', 'yellow', 'red', 'purple', 'sakura'].includes(value)
    },
    size: {
      type: String,
      default: 'sm',
      validator: (value) => ['sm', 'md'].includes(value)
    }
  }
}
</script> 