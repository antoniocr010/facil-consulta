<template>
  <div class="attendanceWrapper">
    <b-form>
      <div class="formSelectGroup">
        <div
          v-for="field in fields.filter((f) => f.options)"
          :key="field.label"
        >
          <CustomSelect
            :fieldProps="field"
            @modelChange="handleInputChange($event, field)"
          />
        </div>
      </div>
      <div
        class="formGroup"
        v-for="field in fields.filter((f) => !f.options)"
        :key="field.label"
      >
        <TextField
          :fieldProps="field"
          @modelChange="handleInputChange($event, field)"
        />
        <SelectPayment/>
      </div>
    </b-form>
  </div>
</template>

<script>
import SelectPayment from '@/components/ui/SelectPayment'
import TextField from '@/components/ui/TextField';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import SpecialtyService from '@/services/specialtyService';

export default {
  props: ['fields'],
  components: {
    TextField,
    CustomSelect,
    SelectPayment,
  },
  async mounted() {
    const specialties = await SpecialtyService.get();
    const data = {
      name: 'specialty',
      prop: 'options',
      value: [
        { value: null, text: 'Selecione a especialidade', disabled: true },
        ...specialties,
      ],
    };
    this.$store.commit('SET_FORMFIELDS', data);
  },
  methods: {
    async handleInputChange(value, fieldData) {
      this.$emit('changeValues', value, fieldData);
    },
  },
};
</script>

<style lang="scss">
@import '@/sass/master';

.attendanceWrapper {
  > form {
    .formGroup:first-child {
      width: 100%;
    }

    .formGroup {
      width: 75%;
    }

    .formSelectGroup {
      width: 100%;
      @include flexbox(row, center, flex-start, $spacing-xsmall);

      > div {
        width: 100%;
      }
    }

    .input-group-text {
      background-color: $primary;
      border-color: $primary;
      color: $white-1;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
