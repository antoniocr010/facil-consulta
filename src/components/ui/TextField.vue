<template>
  <div class="inputWrapper">
    <b-form-group :label="field.label" class="formItem">
      <b-input-group :prepend="field.name === 'price' ? 'R$' : ''">
        <b-form-input
          :class="!isValid ? 'error' : ''"
          v-model="modelLocal"
          :placeholder="field.placeholder"
          :mask="!!field.mask ? field.mask : ''"
          v-mask="field.mask"
          autocomplete="off"
          @blur="handleInputTouch($event.target.value)"
          @input="handleInputTouch($event)"
        >
        </b-form-input>
      </b-input-group>
      <span class="errorMessage" v-if="!isValid">
        {{ validator.inputData[field.name].errorMessage }}
      </span>
    </b-form-group>
  </div>
</template>

<script>
import { mask as maskDirective } from 'vue-the-mask';
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
  methods: {
    handleInputTouch(value = '') {
      validator.validateInput(this.field.validations, {
        label: this.field.label,
        name: this.field.name,
        value,
      });

      this.isValid = validator.inputData[this.field.name].isValid;
      this.field.isValid = validator.inputData[this.field.name].isValid;
    },
  },
  computed: {
    modelLocal: {
      get: function () {
        return this.field.value;
      },
      set: function (value) {
        this.$emit('modelChange', value, this.field);
      },
    },
  },
  directives: {
    mask: function (e, b) {
      if (!b.value) {
        return;
      }

      maskDirective(e, b);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/master';

.inputWrapper {
  width: 100%;
  font-weight: $text-semibold;

  input {
    box-shadow: none;
    border-color: $primary;

    &.error {
      border-color: $danger;
    }
  }

  .formItem {
    position: relative;
  }

  .errorMessage {
    color: $danger;
    font-size: $text-small;
    position: absolute;
  }
}
</style>
