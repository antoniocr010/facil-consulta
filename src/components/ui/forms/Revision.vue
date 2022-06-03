<template>
  <div class="revisionWrapper">
    <p class="info">Nome Completo</p>
  
    <p class="info">CPF</p>
  
    <p class="info">Número de celular ou telefone</p>
  
    <p class="info">Estado/Cidade</p>
  
    <p class="info">Especialiddade principal</p>
  
    <p class="info">Preço da consulta</p>
  
    <p class="info">Formas de pagamentos da consulta</p>
  
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
.revisioWrappen {
  width: 100%;
}
  .info {
    font: $text-medium;
    font-weight: $text-semibold;
    margin-bottom: $spacing-xxsmall;
  }
</style>
