<template>
  <div class="customSelectWrapper">
    <b-form-group :label="field.label" class="customSelectContent">
      <b-form-select
        v-model="selected"
        :options="field.options"
        :disabled="!field.options.length"
      >
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import validator from '@/utils/inputValidator';

export default {
  props: ['fieldProps'],
  data() {
    return {
      field: this.fieldProps,
      isValid: true,
      validator,
    };
  },
  computed: {
    selected: {
      get: function () {
        return this.field.value;
      },
      set: function (value) {
        if (value) {
          this.field.isValid = true;
        }
        this.$emit('modelChange', value, this.field);
      },
    },
  },
};
</script>

<style lang="scss">
@import '@/sass/master';

.customSelectWrapper {
  width: 100%;
  font-weight: $text-semibold;

  .customSelectContent {
    position: relative;

    select {
      width: 100%;
      box-shadow: none;
      border-color: $primary;
      padding: 6px 10px;
      border-radius: 5px;
    
background: $white-1;
      &:focus-visible {
        outline: none;
      }

      &.error {
        border-color: $danger;
      }
    }
  }

  .errorMessage {
    color: $danger;
    font-size: $text-small;
    position: absolute;
  }
}
</style>
