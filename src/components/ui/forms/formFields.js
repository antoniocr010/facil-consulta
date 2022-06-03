export default [
  {
    title: 'Dados do profissional',
    fields: [
      {
        name: 'name',
        label: 'Nome completo',
        placeholder: 'Digite o nome completo',
        value: '',
        validations: [
          { name: 'required' },
          { name: 'minLength', rule: 3 },
          { name: 'maxLength', rule: 50 },
        ],
        isValid: false,
      },
      {
        name: 'cpf',
        label: 'CPF',
        placeholder: 'Digite um CPF',
        value: '',
        mask: '###.###.###-##',
        validations: [{ name: 'required' }, { name: 'minLength', rule: 13 }],
        isValid: false,
      },
      {
        name: 'phone',
        label: 'Número de celular',
        placeholder: '(00) 0 0000-0000',
        value: '',
        mask: '(##) 9 ####-####',
        validations: [{ name: 'required' }, { name: 'minLength', rule: 15 }],
        isValid: false,
      },
      {
        name: 'state',
        label: 'Estado',
        value: null,
        options: [],
        isValid: false,
      },
      {
        name: 'city',
        label: 'Cidade',
        value: null,
        options: [{ value: null, text: 'Selecione', disabled: true }],
        isValid: false,
      },
    ],
  },
  {
    title: 'Detalhes do atendimento',
    fields: [
      {
        name: 'specialty',
        label: 'Especialidade principal',
        value: null,
        options: [
          { value: null, text: 'Selecione a especialidade', disabled: true },
        ],
        isValid: false,
      },
      {
        name: 'price',
        label: 'Preço da consulta',
        placeholder: 'Valor',
        value: '',
        validations: [{ name: 'required' }],
        isValid: false,
      },
      
    ],
  },
 
  {
    title: '',
    fields: [],
  },
];
