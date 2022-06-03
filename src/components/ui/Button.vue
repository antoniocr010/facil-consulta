<template>
  <div class="buttonWrapper">
    <b-button
      :class="[!!minimal ? 'minimal' : '', !!block ? 'block' : '']"
      :disabled="disabled"
      @click="handleClick()"
    >
      {{ label }}
      <b-icon stacked :icon="icon" v-if="icon" />
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: ['label', 'action', 'block', 'icon', 'minimal', 'disabled'],
  methods: {
    handleClick() {
      this.$emit('action');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/master';

.buttonWrapper {
  button {
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    border-radius: 50px;
    text-transform: uppercase;
    background-color: $primary;
    transition: $transition-smooth;
    padding: 7px 0 5px;

    &:hover {
      background: lighten($primary, 10%);
    }

    &:focus,
    &:active {
      border: none;
      outline: none;
      box-shadow: none;
    }

    &:disabled {
      background-color: $gray;
    }

    &.minimal {
      background: none;
      padding: 0;
    }

    &.block {
      width: 100%;
    }

    svg {
      width: 20px;
      height: 20px;
      color: $black;
    }
  }
}
</style>
