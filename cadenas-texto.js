let nombre = "Manuel";
let apellido = "Castro";
let estudiante = `Nombre: ${nombre}, Apellido: ${apellido}`
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);

let primeraLetra = estudiante[0];
console.log(primeraLetra);

let eliminarEspacios = estudiante.replace(/\s/g, "");
console.log(eliminarEspacios);

let estaContenido = estudiante.includes(nombre);
console.log(estaContenido);


