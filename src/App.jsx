import { Fragment } from "react";
import "./App.css";
import Home from './pages/Home' 
import AccordionComponent from './components/AccordionComponent';




function App() {
  // *************** JAVASCRIPT MODERNO ***************
  // Variable: almacen de datos
  var nombre_variable = "Cadena de caracteres"; // Lo puedo reasignar
  nombre_variable = "Nuevo nombre de variable";
  const VARIABLE_NO_REASIGNABLE = 3;
  let variable_reasignable = 4;

  /*  Comentario
  enbloque
  de muchas
  líneas */

  //Const - Valores no reasignables (pero mutables)
  const PI = 3.14159;
  const URL_API = "https://api.spotify.com";
  const EDAD_MINIMA = 18; //SCREAM_SNAKE_CASE

  //1º Defino o inicializo/declaro una variable
  const NOMBRE = "Ana";
  //2º Intento reasignar la variable
  //NOMBRE = "Pedro";  Error porque NOMBRE es una constante que no se puede reasignar.

  //Let - Valores reasignables
  let nombre_dos = "Ana";
  //2º Intento reasignar la variable
  nombre_dos = "Pedro";

  // TIPOS DE DATOS

  const cadena_caracteres = "1234bnfsdf+++sdf **";
  const cadena_caracteres_dos = "1234bnfsdf+++sdf **"; // La convención es usar comillas simples
  const numero = 3;
  const numero_flotante = 3.6;
  const listas = ["cadenas", 4, 6.8];
  const boolean_verdadero = true; //Booleanos con minúscula
  const boolean_falso = false;

  // *************** REACT ***************

  // Operaciones con tipos de datos
  const suma = 20 + 20;
  const resta = 120 - 10;
  const multiplicacion = 30 * 3;
  const division = 30 / 3;
  const resto = 10 % 3; //Me devuelve el resto resultanto de la división planteada -> 1

  const isActive = false;
  const isLogged = true;
  if (isLogged) {
    // Si la condición se evalúa como verdadera, se ejecuta el código del interior de la estructura de control condicional
    console.log("Bienvenido de nuevo amigo");
  }
  const NO_MUTABLE_NI_REASIGNABLE =
    "Quiero indicar que este valor no solo es no reasignable, también debe ser inmutable";

  // POR DEFECTO USARÉ SIEMPRE CONST (Let solo cuandos sepamos seguro que un valor va a cambiar)

  let sinDefinir; // La variable existe, pero no tiene un valor asignado
  console.log(sinDefinir);

  let usuarioActual = null; // Tipo de dato "vacio" -> No hay un usuario logueado todavía

  // Arrays en REACT: Listas de elementos ordenadas
  const listaOrdenada = [3, 5, 1, 6, 8, 3]; //Mantiene el orden de insercción
  console.log(listaOrdenada[0]); // Estoy accediendo al elemento con el index 0 -> 3
  console.log(listaOrdenada[3]); // 6
  console.log(listaOrdenada[5]); // 3

  // Objetos - Representa una "cosa" con características
  /* 
  SINTAXIS DE OBJETOS
  const objeto = {
    propiedad: valor,
    propiedad: valor
  } */
  const usuario = {
    nombre: "Alejandra",
    apellido: "Espinosa",
    edad: 35,
    email: "alesrin@icloud.com",
  };

  // Acceder a las propiedades con punto
  console.log(usuario.nombre); // Quiero acceder a la propiedad nombre del objeto usuario
  console.log(usuario.email); // Quiero acceder a la propiedad email del objeto usuario

  // Acceder a las propiedades con corchetes
  console.log(usuario["nombre"]); // Quiero acceder a la propiedad nombre del objeto usuario
  console.log(usuario["edad"]); // Quiero acceder a la propiedad edad del objeto usuario. Puedo acceder usando comillas dobles o comillas simples.

  // Modificar propiedades
  usuario.edad = 32;
  // Crear propiedades
  usuario.ciudad = "Madrid";

  // COMBINAR LISTAS Y OBJETOS
  const usuarios = [
    { id: 1, nombre: "Pepe", apellidos: "Flores" }, // index 0
    { id: 2, nombre: "Juan", apellidos: "Perez" }, // index 1
    { id: 3, nombre: "Ana", apellidos: "Dominguez" }, // index 2
  ];

  console.log(usuarios[1]); // { id: 2, nombre: "Juan", apellidos: "Perez" }
  console.log(usuarios[2].nombre); // Ana
  console.log(usuarios[0].apellidos); // Flores

  console.log(
    resto,
    usuarios,
    usuario,
    listaOrdenada,
    usuarioActual,
    nombre_variable,
    VARIABLE_NO_REASIGNABLE,
    variable_reasignable,
    nombre_dos,
    NOMBRE,
    cadena_caracteres,
    cadena_caracteres_dos,
    numero,
    numero_flotante,
    listas,
    boolean_falso,
    boolean_verdadero,
    isActive,
    suma,
    resta,
    multiplicacion,
    division
  );

  const pajaros = [
    { nombre: "gorrión", talla: "small", color: "marron" },
    { nombre: "gaviota", talla: "medium", color: "blanco" },
    { nombre: "buitre", talla: "big", color: "negro" },
  ];

  console.log("Color del buitre:", pajaros[2].color);
  console.log("Talla de la gaviota:", pajaros[1].talla);
  console.log("Lista de pájaros:", pajaros);

  // -- FUNCIONES -- Es un bloque de código que podemos ejecutar cuando nosotros queramos llamando a la función

  function saludar() {
    console.log("Hola");
  }
  saludar();
  saludar();
  saludar();
  saludar();

  // Funciones con parámetros/argumentos: valores que utiliza la función para trabajar
  function saludarDos(nombre) {
    console.log("Hola", nombre, ", bienvenido");
    console.log("Hola " + nombre + " bienvenido");
  }

  saludarDos("Pepe");
  saludarDos("Nacho");

  const nombre = usuario.nombre;

  saludarDos(nombre);
  saludarDos(usuario.nombre);

  // Funciones que devuelvan valores
  function sumaFun(a, b) {
    return a + b;
  }
  sumaFun(6, 11);

  const resultado = sumaFun(5, 5);
  console.log(resultado);

  // ARROW FUNCTIONS: versión acortada de escribir funciones. ESTANDAR EN REACT

  const sumaFunArr = (a, b) => {
    return a + b;
  };

  // Si solo tenemos una línea que retorna algo utilizamos la sintaxis simplificada
  const sumaFunArrLine = (a, b) => a + b;

  sumaFunArr(5, 7);
  sumaFunArrLine(10, 10);

  const calcularPrecioConIva = (precio) => {
    const iva = precio * 0.21;
    const total = precio + iva;
    return total;
  };

  calcularPrecioConIva(50);

  const concatenado =
    "Hola me llamo" + nombre + "y tengo" + usuario.edad + "años";

  // La convención en React es utilizr template literals EXPRESIONES DE JS DENTRO DE UN STRING
  const templateLiterals = `Hola, me llamo ${nombre} y tengo ${usuario.edad} años`;

  // Funciones en Templates Literals
  const name = "MARI CARMEN";
  const productoSeleccionado = 20;
  const saludo_template = `Hola, ${name.toUpperCase()}, el precio del producto + IVA es ${calcularPrecioConIva(
    productoSeleccionado
  )}`;

  console.log(concatenado);
  console.log(templateLiterals);
  console.log(saludo_template);

  // DESTRUCTURING: Extraer datos elegantemente
  const usuarioDes = {
    id: 37552,
    nombreUser: "Pepa",
    apellidoUser: "Sanz",
    edad: 50,
    email: "pepasanz@gmail.com",
  };

  // SI SOLO NECESITO EXTRAER UNA PROPIEDAD

  const nombreUno = usuarioDes.nombre;
  const apellidoUno = usuarioDes.apellido;
  const edadUno = usuarioDes.edad;
  const emailUno = usuarioDes.email;

  // SI NECESITO EXTRAER MÁS DE UNA PROPIEDAD

  const { idDes, nombreDes, apellidoDes, edadDes, emailDes } = usuarioDes; // Debe coincidir el nº de propiedades del objeto, con el nº de variables en bloque que declaro. El orden en el que yo declaro las variables en bloque coincidirá exactamente con la extracción de las propiedades del objeto

  //Cuando quiero extraer solo unas propiedades y otras no, debo utilizar el nombre exacto de la propiedad que estoy estrayendo para inicializar la variable que almacenará esa propiedad
  const { nombreUser, apellidoUser } = usuario;
  console.log(nombreUser, apellidoUser);

  // Cuando quiero renombrar las propiedades y a lavez extraer solo algunas (no todas), inicilizo las variables después de llamar a la propiedad desde la cual vamos a extraer ese valor.
  const { edad: edadUser, email: emailUser } = usuario;

  // Valores por defecto
  const { id: idUser = 1, nombreUser: nombreUserDos } = usuario;

  const listaColores = ["rojo", "verde", "amarillo", "azul"];
  const colorUno = listaColores[0];
  const [colorPrimero, colorSegundo, colorTercero] = listaColores;

  const [colorRojo, , colorAmarillo] = listaColores;

  console.log(colorPrimero); //rojo
  console.log(`El color desempaquetado es ${colorAmarillo}`);
  console.log(`El color desempaquetado es ${colorRojo}`);

  console.log(
    colorSegundo,
    colorTercero,
    apellidoUno,
    edadUno,
    emailUno,
    nombreUno,
    colorUno,
    listaColores,
    idUser,
    nombreDes,
    apellidoDes,
    edadDes,
    emailDes,
    edadUser,
    emailUser,
    idDes,
    nombreUserDos
  );

  // SPREAD OPERATOR (...) - Este operador nos permite expandir el contenido de una colección de datos (lista, objeto). En React nunca modificamos los datos directamente, siempre creamos copias nuevas --> INMUTABILIDAD
  const frutas = ["manzana", "pera", "plátano", "naranja"];

  // const naranja = frutas[3]; -> Método para extraer un solo valor del array
  const copiaFrutas = [...frutas]; // Copia de frutas: ["manzana", "pera", "plátano", "naranja"]

  console.log(`Esta es una copia de frutas ${copiaFrutas}`);

  // Añadir elementos a una lista
  const frutasAmpliadas = [...frutas, "kiwi", "mango"]; // Copia de frutas: ["manzana", "pera", "plátano", "naranja"] + ["kiwi", "mango"] --> ["manzana", "pera", "plátano", "naranja", "kiwi", "mango"]
  const frutasAmpliadasInicio = ["fresa", ...frutasAmpliadas]; // ["fresa", manzana", "pera", "plátano", "naranja", "kiwi", "mango"]
  console.log(`Esta es la lista frutas ampliada al final ${frutasAmpliadas}`);
  console.log(
    `Esta es la lista frutas ampliada al inicio ${frutasAmpliadasInicio}`
  );

  // Combinar dos arrays
  const verduras = ["tomate", "acelga", "cebolla"];
  const comida = [...frutasAmpliadasInicio, ...verduras]; // ["fresa", manzana", "pera", "plátano", "naranja", "kiwi", "mango", "tomate", "acelga", "cebolla"]
  console.log(`Esta es la lista mergeada de frutas y verduras ${comida}`);

  const persona = {
    nombre: "Mariano",
    edad: 67,
  };

  const copiaPersona = { ...persona };
  console.log(`Esta es una copia de la persona ${copiaPersona}`);

  // Ampliar propiedades de objetos
  const usuarioCompleto = {
    ...copiaPersona,
    email: "mariano@gmail.com",
    ciudad: "Madrid",
  };
  console.log(`Esta es una copia de la persona ampliada ${usuarioCompleto}`);

  // Modificar propiedades de objetos
  const edadModificada = { ...usuarioCompleto, edad: 40 };
  console.log(`Esta es un Mariano rejuvenecido ${edadModificada.edad}`);

  // persona.edad = 40 -> Esto en REACT NUUUUUUUNNNCAAAAAAAA. Mutamos el objeto original

  // REST OPERATOR (...) - Recoge múltiples elementos en uno
  const sumarTodos = (...numeros) => {
    let total = 0;
    for (const num of numeros) {
      total = total + num;
    }
    return total;
  };
  console.log(`Sumatorio de 2 valores: ${sumarTodos(1, 3)}`); // 4
  console.log(`Sumatorio de 4 valores: ${sumarTodos(3, 3, 3, 3)}`); // 12
  console.log(
    `Sumatorio de 10 valores: ${sumarTodos(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)}`
  ); // 10

  const numeroDos = [1, 2, 3, 4, 5];

  // Extraer el primero y lanzar el resto en un nuevo array
  const [primero, ...restoNumeros] = numeroDos;
  console.log(`Primer número: ${primero}`);
  console.log(`Los demás números de la lista: ${restoNumeros}`);

  // Extraer la primera y lanzar el resto de propiedades en un nuevo objeto
  const pepe = {
    id: 1,
    email: "pepe@pepe.com",
    edad: 25,
  };

  const { id, ...restoDatosPepe } = pepe;
  console.log(`Id de pepe: ${id}`);
  console.log(
    `Resto de datos de pepe (edad, email): ${restoDatosPepe.edad}, ${restoDatosPepe.email}`
  );

  // TRUCO DEL ALMENDRUCO: Si el operador (...) está situado a la derecha del operador (=) es un SPREAD (extiende), si está situado a la izquierda es un REST (recoge)

  // *************** MÉTODOS DE ARRAYS ***************

  //map(): Transformar cada elemento de una colección de datos Y crear un nuevo array aplicando una función a cada elemento

  const numeroTres = [1, 2, 3, 4, 5];
  const duplicados = numeroTres.map(numero => numero * 2); // [2, 4, 6, 8, 10]
  console.log(`Lista de números duplicados: ${duplicados}`);
  console.log(`Array original: ${numeroTres}`); // [1, 2, 3, 4, 5]
  
  const usuariosApp = [
    { id: 1, nombre: 'Paco', apellido: 'de Lucía'},
    { id: 2, nombre: 'Estrella', apellido: 'Morente'},
    { id: 3, nombre: 'Camarón', apellido: 'de la Isla'}
  ]

  const nombresUsuarioApp = usuariosApp.map(usuariosApp => {return ` - Nombre: ${usuariosApp.nombre}; apellido: ${usuariosApp.apellido}.`})
  console.log(`Nombre y apellido de los usuarios: ${nombresUsuarioApp}`); 

  // Método acortado (habitual en la lógica)
  const nombreApellido = usuariosApp.map(u => `${u.nombre} ${u.apellido}`)
  console.log(`Nombre y apellido de los usuarios: ${nombreApellido}`);
  
  return (
    <>
      {/* COMENTARIO EN JSX: Home */}
      {/* <Home /> */}
      {/* <AccordionComponent /> */}
      {/*   <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
           
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
           
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
           
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
            
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 columna">
           
            <h2>Nombre producto</h2>
            <span>Descripción de producto</span>
            <button className="boton">Comprar</button>
          </div>
        </div>
      </div> */}
      <ul>
        {usuariosApp.map(usuario => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
