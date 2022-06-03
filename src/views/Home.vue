<template>
  <div class="pageWrapper">
    <Container>
      <div class="backWrapper">
        <Button
          icon="chevron-left"
          :minimal="true"
          @action="previousStep()"
          v-if="$store.state.stepIndex > 1"
        />
      </div>

      <div class="contentWrapper">
        <FormTemplate />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/structure/Container';
import Button from '@/components/ui/Button';
import FormTemplate from '@/components/ui/FormTemplate';

export default {
  components: {
    Container,
    Button,
    FormTemplate,
  },
  methods: {
    previousStep() {
      this.$store.commit('SET_STEPINDEX', --this.$store.state.stepIndex);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/sass/master';

.pageWrapper {
  height: 100%;
  width: 100%;
  @include flexbox(row, center, center, 0);

  .backWrapper {
    position: absolute;
    top: -5.5%;
    left: 0;
  }

  .contentWrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: $spacing-large $spacing-xxlarge;
  }

  @media (max-width: $mobile) {
    @include flexbox(row, flex-end, center, 0);

    .backWrapper {
      top: -7.5%;
      left: 30px;
    }

    .contentWrapper {
      padding: $spacing-xxlarge $spacing-xxsmall;
    }
  }
}
</style>
