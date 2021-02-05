var moment = require('moment');

let ahora = moment().format();

console.log("ahora: " , ahora);

let febrero = moment("2020-02-29").isValid();

console.log("febrero: ", febrero);

let hoy = moment().format('dddd');

console.log("hoy: ", hoy);

// Fecha nacimiento
moment.locale("es");  
let fecha_nac = moment("1980-11-07").format('MMMM DD YYYY');
console.log("Mi fecha de nacimiento es: ", fecha_nac);

// Día de la semana en qué nací
let dia_nac = moment("1980-11-07").format('dddd');   
console.log("Nací un: ", dia_nac);

// Años de nacimiento
let edad = moment("1980-11-07", "YYYY-MM-DD").fromNow();
console.log("Mi edad es: ", edad);

// Fecha dentro de 258 días
let nueva_fecha = moment().add(258, 'days').calendar();   
console.log("La nueva fecha es: ", nueva_fecha);

// Fecha dentro de 4 semanas
let nueva_fecha1 = moment().add(4, 'weeks').calendar();   
console.log("La nueva fecha es: ", nueva_fecha1);

// Fecha dentro de 4 semanas 
