<template>
  <div class="bannerWrapper">
    <img
      :src="`/images/banner-${$store.state.stepIndex}.png`"
      :alt="`Banner-${$store.state.stepIndex}`"
    />
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

.bannerWrapper {
  > img {
    width: 100%;
    object-fit: cover;
    margin-top:$spacing-xsmall ;
  }

  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
