const suaGraca = [' Giovanna', ' Guilherme', ' Gustavo', ' Nuno', ' Ale', ' Wladmir'];
const contagemName = suaGraca.every(name => name.length > 5);

console.log(`Todos os nomes têm mais de 5 letras: ${contagemName}`);