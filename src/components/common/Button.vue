<template>
  <button 
    :class="[
      variant === 'primary' ? 'btn-primary' : 
      variant === 'secondary' ? 'btn-secondary' : 
      variant === 'danger' ? 'btn-danger' : '',
      size === 'sm' ? 'btn-sm' : '',
      block ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div class="flex items-center justify-center">
      <slot name="icon-left"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'sm'].includes(value)
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
}
</script> 