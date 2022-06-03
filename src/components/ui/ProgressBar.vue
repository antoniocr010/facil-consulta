<template>
  <div class="progressBarWrapper">
    <div class="under-bar">
      <div
        class="bar-progress"
        :class="$store.state.stepIndex === 2 ? 'full-bar-progress ' : ''"
      ></div>
    </div>
    <span>{{ $store.state.stepIndex }} de 2</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '@/sass/master';

.progressBarWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  gap: $spacing-medium;

  > span {
    font-size: $text-medium;
    font-weight: $text-semibold;
    color: $primary;
  }
}

.under-bar {
  background: $white-2;
  

  .bar-progress {
    width: 50%;
    background-color: $primary;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 16px;
    transition: $transition-smooth;
  }

  .full-bar-progress {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
