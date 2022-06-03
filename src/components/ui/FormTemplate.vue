<template>
  <div class="formTemplateWrapper">
    <div class="formTemplateHeader">
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="formTemplateContentWrapper">
      <span class="title">{{ formTitle }}</span>
      <div class="formTemplateContent">
        <div class="formWrapper">
          <Identification
            v-if="$store.state.stepIndex === 1"
            :title="title"
            :fields="formFields"
            @changeValues="handleInputChange"
          />
          <Attendance
            v-if="$store.state.stepIndex === 2"
            :title="title"
            :fields="formFields"
            @changeValues="handleInputChange"
          />
          <Revision v-if="$store.state.stepIndex === 3" :fields="formFields" />

          <div class="controlWrapper">
            <ProgressBar v-if="$store.state.stepIndex < 3" />
            <Button
              :label="
                $store.state.stepIndex === 3
                  ? 'Cadastrar Profissional'
                  : 'Próximo'
              "
              :class="$store.state.stepIndex === 3 ? 'conclusion' : ''"
              :block="true"
              @action="nextStep()"
              :disabled="!$store.state.isValidForm"
            />
          </div>
        </div>
        <Banner />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Identification from '@/components/ui/forms/Identification';
import Attendance from '@/components/ui/forms/Attendance';
import ProgressBar from '@/components/ui/ProgressBar.vue';
import Revision from '@/components/ui/forms/Revision.vue';

export default {
  components: {
    Banner,
    Button,
    Identification,
    Attendance,
    ProgressBar,
    Revision,
  },
  data() {
    return {
      title: '',
      isValidForm: false,
    };
  },

  computed: {
    pageTitle: function () {
      const titles = [
        'Sobre o profissional',
        'Sobre o atendimento',
        'Revisão do cadastro',
      ];

      return titles[this.$store.state.stepIndex - 1];
    },

    formTitle: function () {
      return this.$store.state.formFields[this.$store.state.stepIndex - 1]
        .title;
    },

    formFields: function () {
      return this.$store.state.formFields[this.$store.state.stepIndex - 1]
        .fields;
    },
  },
  methods: {
    handleInputChange(newValue, data) {
      const { name, isValid } = data;
      const formData = {
        name,
        value: newValue,
        isValid,
      };

      this.$store.commit('SET_FORMDATA', formData);

      this.isValidForm =
        this.$store.state.formFields[
          this.$store.state.stepIndex - 1
        ].fields.filter((field) => !field.isValid).length === 0;

      this.$store.commit('SET_ISVALIDFORM', this.isValidForm);
    },

    nextStep() {
      this.$store.commit('SET_STEPINDEX', this.$store.state.stepIndex + 1);
    },
  },
};
</script>

<style lang="scss">
@import '@/sass/master';

.formTemplateWrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: $spacing-large $spacing-xxlarge;
  @include flexbox(column, flex-start, flex-start, $spacing-xxsmall);

  .formTemplateHeader {
    > h1 {
      font-size: 35px;
      font-weight: $text-bold;
      color: $primary;
    }
  }

  .formTemplateContentWrapper {
    width: 100%;
    height: 100%;
    @include flexbox(column, flex-start, flex-start, $spacing-xsmall);

    .title {
      font-size: $text-large;
      font-weight: $text-bold;
    }

    .formTemplateContent {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: $spacing-medium;

      .formWrapper {
        width: 100%;
        @include flexbox(column, flex-start, space-between, $spacing-xsmall);

        > div {
          width: 100%;
        }

        form {
          @include flexbox(column, flex-start, center, $spacing-xsmall);
        }
      }
    }
  }

  .controlWrapper {
    @include flexbox(column, unset, column, $spacing-xsmall);
    width: 100%;

    .conclusion {
      button {
        background-color: $yellow-2;
        color: $black;
        font-weight: $text-bold;

        &:hover {
          background: $yellow-1;
        }
      }
    }
  }

  @media (max-width: $mobile) {
    padding: $spacing-xxlarge $spacing-xxsmall;

    .formTemplateContentWrapper {
      width: 100%;
      height: 100%;
      display: block;

      .formTemplateContent {
        display: block;
      }
    }

    .formTemplateHeader {
      > h1 {
        text-align: center;
      }
    }
  }
}
</style>
