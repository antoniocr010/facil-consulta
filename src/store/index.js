import Vue from 'vue';
import Vuex from 'vuex';
import formFields from '@/components/ui/forms/formFields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepIndex: 1,
    formFields,
    isValidForm: false,
  },

  mutations: {
    SET_STEPINDEX(state, data) {
      if (data > 3) {
        state.stepIndex = 3;
      } else if (data < 1) {
        state.stepIndex = 1;
      } else {
        state.stepIndex = data;
      }
    },

    SET_ISVALIDFORM(state, data) {
      this.state.isValidForm = data;
    },

    SET_FORMFIELDS(state, data) {
      const { name, prop, value } = data;
      const stepIndex = state.stepIndex - 1;

      const index = state.formFields[stepIndex].fields.findIndex(
        (field) => field.name === name
      );

      
      state.formFields[stepIndex].fields[index][prop] = value;
    },

    SET_FORMDATA(state, data) {
      const { name, value, isValid } = data;
      const stepIndex = state.stepIndex - 1;
      const index = state.formFields[stepIndex].fields.findIndex(
        (field) => field.name === name
      );

      state.formFields[stepIndex].fields[index].value = value;
      state.formFields[stepIndex].fields[index].isValid = isValid;
    },
  },
});
