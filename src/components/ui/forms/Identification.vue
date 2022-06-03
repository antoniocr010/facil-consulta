<template>
  <div class="identificationWrapper">
    <b-form>
      <div
        class="formGroup"
        v-for="field in fields.filter((f) => !f.options)"
        :key="field.label"
      >
        <TextField
          :fieldProps="field"
          @modelChange="handleInputChange($event, field)"
        />
      </div>
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
    </b-form>
  </div>
</template>

<script>
import TextField from '@/components/ui/TextField';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import LocationService from '@/services/locationService';

export default {
  props: ['fields'],
  components: {
    TextField,
    CustomSelect,
  },
  data() {
    return {
      name: 'identification',
    };
  },
  async mounted() {
    const states = await LocationService.states.get();
    const data = {
      name: 'state',
      prop: 'options',
      value: [{ value: null, text: 'Selecione', disabled: true }, ...states],
    };
    this.$store.commit('SET_FORMFIELDS', data);
  },
  methods: {
    async handleInputChange(value, fieldData) {
      this.$emit('changeValues', value, fieldData);

      if (fieldData.name === 'state') {
        const id = await LocationService.states.getIdByInitials(value);
        const cities = await LocationService.cities.get(id);
        const data = {
          name: 'city',
          prop: 'options',
          value: [
            { value: null, text: 'Selecione', disabled: true },
            ...cities,
          ],
        };
        this.$store.commit('SET_FORMFIELDS', data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/sass/master';

.identificationWrapper {
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
  }
}
</style>
