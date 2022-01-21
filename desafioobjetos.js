/*Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Crear al menos un objeto para controlar el funcionamiento de tu simulador.
Incorporarle sus propiedades y su constructor.
Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
Utilizar sus mètodos.
*/

//En este caso, el prompt nos va a pedir que ingresemos 3 computadoras distintas.
//las marcas a ingresar pueden ser : ACER,LENOVO,TOSHIBA
//las ram a ingresar pueden ser 4GB 8GB 16GB
//los procesadores a elegir pueden ser INTEL o AMD
//las placas a elegir pueden ser GIGABYTE, MSI, ASROCK
//te pongo esta info por las dudas, asi no andas buscando modelos.

class Computadora {
  constructor(modelo, ram, procesador, placa) {
    this.modelo = modelo.toUpperCase();
    this.ram = ram.toUpperCase();
    this.procesador = procesador.toUpperCase();
    this.placa = placa.toUpperCase();
  }
  modeloElegido() {
    console.log(
      "Has elegido el modelo " +
        this.modelo +
        " con " +
        this.ram +
        " de memoria ram" +
        " y su procesador es " +
        this.procesador +
        " " +
        "y su placa es " +
        this.placa
    );
  }
}

for (i = 0; i < 1; i++) {
  let mipc = new Computadora(
    prompt("Ingrese el modelo de computadora que quiere"),
    prompt("Ingrese cuanta ram quiere"),
    prompt("Ingrese el procesador"),
    prompt("Ingrese la placa")
  );

  mipc.modeloElegido();
}
