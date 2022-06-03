class InputValidation {
  inputData = {};

  errors = [];

  validationMethods = {
    required: (_, name) => {
      if (!this.inputData[name].value) {
        this.inputData[
          name
        ].errorMessage = `O campo ${this.inputData[name].label} é obrigatório`;
      }

      return !!this.inputData[name].value;
    },

    minLength: (minLength = 2, name) => {
      if (this.inputData[name].value) {
        if (this.inputData[name].value.length < minLength) {
          this.inputData[name].errorMessage = `Mínimo ${minLength} caracteres`;
        }

        return this.inputData[name].value.length >= minLength;
      }
    },

    maxLength: (maxLength = 255, name) => {
      if (this.inputData[name].value) {
        if (this.inputData[name].value.length > maxLength) {
          this.inputData[name].errorMessage = `Máximo ${maxLength} caracteres`;
        }

        return this.inputData[name].value.length <= maxLength;
      }
    },
  };

  validateInput = (validations, { name, label, value }) => {
    this.inputData[name] = {
      name,
      label,
      value: value.trim(),
      errorMessage: '',
      isValid: true,
    };

    validations.forEach((validation, index) => {
      this.errors[index] = this.validationMethods[validation.name](
        validation.rule,
        name
      );
      this.validationMethods[validation.name](validation.rule, name);

      this.inputData[name].isValid = !this.errors.includes(false);
    });
  };
}

export default new InputValidation();
