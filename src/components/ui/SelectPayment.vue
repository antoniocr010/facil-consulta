<template>
  <div>
    <label class="mt-3 mb-2">Forma de pagamento da consulta</label>

    <div class="checkForm col-sm-12">
      <div class="lineage">
        <b-form-checkbox unchecked-value="not_accepted">
          <p>Em dinheiro</p>
        </b-form-checkbox>
      </div>
    </div>
    <div class="checkForm col-sm-12">
      <div class="lineage">
        <b-form-checkbox uned-value="not_accepted">
          <p>Pix</p>
        </b-form-checkbox>
      </div>
    </div>
    <div class="checkForm col-sm-12">
      <div class="lineage align-items-center">
        <b-form-checkbox unchecked-value="not_accepted">
          <p>Cartão de crédito</p>
        </b-form-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'not_accepted',
    };
  },
};
</script>

<style lang="scss">
@import '@/sass/master';
label {
  font-weight: $text-semibold;
  white-space: nowrap;
}
.checkForm {
  height: 40px;
  border-radius: 5px;
  border: 1px solid $white-2;
box-shadow: 1.2px 1px 2px $gray;
  background-color: $white-2;
  align-content: center;
  margin-bottom: 5px;
  padding-top: 7px;

  .lineage {
    margin-left: $spacing-xxlarge;
    align-items: center;
  }

  p {
    margin-left: $spacing-large;
    font-weight: $text-semibold;
    font-size: 16px;
  }
}
</style>
