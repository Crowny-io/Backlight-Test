<template>
  <button :class="{ outlined, clicked }" @click="onClick">
    <span v-if="!clicked">{{ `${greeting} ${name}` }}</span>
    <span v-else>Clicked</span>
  </button>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'John Doe' },
    outlined: { type: Boolean, default: false },
  },
  data() {
    return {
      greeting: 'Hello',
      clicked: false,
    };
  },

  methods: {
    onClick() {
      this.clicked = true;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: var(--spacing-medium) var(--spacing-medium);
  border-radius: 8px;
  border: 1px solid var(--color-purple-p-600);
  font-family: var(--vue-font-family);
  font-size: var(--vue-font-size-00);
  font-weight: var(--vue-font-weight-button);
  letter-spacing: var(--vue-letter-spacing-button);
  text-transform: uppercase;
  color: var(--vue-color-text-on-primary);
  background-color: var(--color-purple-p-600);
  cursor: pointer;

  &.outlined {
    background-color: transparent;
    color: var(--vue-color-primary);
  }

  &:hover {
    background-color: var(--color-purple-p-800);
    color: var(--vue-color-text-on-primary);
    border-color: var(--color-purple-p-800);
  }
}
</style>
