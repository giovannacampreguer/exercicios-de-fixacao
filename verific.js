const procedimentosMedicos = ['Consulta ', 'Exame ',  'Diagnóstico ', 'Tratamento ', 'Internação ', 'Cirurgia ',  'Reabilitação '];
const procedimentoPresente = procedimentosMedicos.includes('Terapia ');

console.log(procedimentoPresente);