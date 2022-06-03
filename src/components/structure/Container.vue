<template>
  <b-container class="containerWrapper">
    <slot></slot>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/master';

.containerWrapper {
  height: 585px;
  max-width: 980px;
  position: relative;
  background: $white-1;
  border-radius: 20px;
  box-shadow: 1px 1px 15px 1px $gray;

  @media (max-width: $mobile) {
    min-width: 100%;
    height: 90%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 1px 1px 5px 0 $gray;
  }
}
</style>
