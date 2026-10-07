const utensiliosDeCozinha = ['Panela ', 'Colher ', 'Faca ', 'Tábua ', 'Espátula ', 'Ralador ', 'Batedeira ', 'Garfo ', 'Frigideira '];
const coisasCozinha = utensiliosDeCozinha.filter((utensilio) => utensilio.length > 6);
console.log(coisasCozinha);