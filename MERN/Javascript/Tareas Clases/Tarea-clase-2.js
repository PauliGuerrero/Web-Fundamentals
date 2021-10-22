const person = [
  {
    nombre: "Gustavo",
    edad: "26",
    direccion: {
      numero: "123",
      calle: "varas mena",
      ciudad: "santiago",
    },
  },
  {
    nombre: "Javier",
    edad: "8",
    direccion: {
      numero: "865",
      calle: "jj vallejo",
      ciudad: "santiago",
    },
  },
  {
    nombre: "Javiera",
    edad: "31",
    direccion: {
      numero: "1120",
      calle: "san ignacio",
      ciudad: "con con",
    },
  },
];

/*1.- Listar todas las personas que tengan mas de 10 años con la función filter*/

const mayor = person.filter(person=> person.edad>10);
console.log(mayor);


/*2.- obtener calle, número y ciudad de la dirección de la tercera persona del array*/

const [,,{direccion:{numero,calle,ciudad}}]=person;
console.log(numero +","+calle+","+ciudad);

/*3.- Agregar una nueva persona al array con spread/rest*/
const persona3={
        nombre:'Luisa',
        edad:'5',
        direccion:{
            numero:'1815',
            calle:'lazo',
            ciudad:'pucon'
        }

    
 }
   


const nuevo =[...person,persona3];
console.log('nueva persona:',nuevo);

/*4.- cambiar nombre y edad a la primera persona del array*/

const [primeraPersona]=person;
const primeraPersonaCambio={...primeraPersona, nombre:'Toño', edad:13};
console.log(primeraPersonaCambio);




