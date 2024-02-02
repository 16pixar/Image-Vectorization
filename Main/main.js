/*Segundo Proyecto de Analisis de Algoritmos 
  Authors: 
          Aarón Piñar Mora
          Alvaro Moreira Villalobos 
  Tema: Algoritmos Geneticos 
*/          




/**
 * Desplaza la ventana hacia abajo en una cantidad igual a la altura de la ventana.
 *
 * @function desplazarAbajo
 * @memberof window
 * @returns {void}
 */
function desplazarAbajo() {
  window.scrollBy(0, window.innerHeight);
}

var compruebaSeleccion = false;
var cantGen = 0;
var cantIndi = 0;
var cantPuntos = 0;
var cantMutaciones = 0;

/**
 * Valida los inputs dentro de la zona de input y realiza acciones dependiendo de los valores ingresados.
 *
 * @function validarInputs
 * @returns {boolean} - Indica si la validación fue exitosa o no.
 */
function validarInputs() {
  var inputs = document.querySelectorAll('.zonaInput input');
  var valido = true;

  // Recorrer todos los inputs dentro de la zonaInput
  inputs.forEach(function(input) {
    var valor = input.value.trim();

    // Validar si el input está vacío
    if (valor === '') {
      alert('El campo "' + input.nextElementSibling.innerText + '" está vacío');
      valido = false;
    }

    // Validar si el input no es un número mayor a 0
    if (!/^[1-9]\d*$/.test(valor)) {
      alert('El campo "' + input.nextElementSibling.innerText + '" debe contener solo números mayores a 0');
      valido = false;
    }

    // Asignar el valor a la variable correspondiente
    if (input.nextElementSibling.innerText === 'CANTIDAD GENERACIONES') {
      cantGen = parseInt(valor);
     // console.log(cantGen);
    } 
    if (input.nextElementSibling.innerText === 'CANTIDAD DE INDIVIDUOS') {
      cantIndi = parseInt(valor);
     // console.log(cantIndi);
    } 
    if (input.nextElementSibling.innerText === 'CANTIDAD DE PUNTOS') {
      cantPuntos = parseInt(valor);
     // console.log(cantPuntos);
    } 
    
    if (input.nextElementSibling.innerText === 'PORCENTAJE MUTACION') {
      cantMutaciones = parseInt(valor);
   //   console.log("a ver", input.nextElementSibling.innerText)
    //  console.log("holaaa",cantMutaciones);
    } 
    
  });

  return valido;
}

//----------------------------------------------------------- Reloj ------------------------------------------------------------------------------

var playBtn = document.getElementsByClassName("play")[0];
var lapBtn = document.querySelector(".lap");
var laps = document.querySelector(".tiempos");
var encabezado = document.querySelector(".titulo");
var btnLimpia = document.querySelector(".limpiaHistorial");
var minutos = document.querySelector(".minutos")
var segundos = document.querySelector(".segundos");
var mili = document.querySelector(".milisegundos")
var minCounter = 0; 
var min;
var secCounter = 0;
var sec;
var miliSeg;
var miliCounter = 0; 

// Muestra lo necesario despues de cargar imagen 
var zonaInput = document.querySelector(".zonaInput")
var can = document.querySelector(".can")
var reloj = document.querySelector(".reloj")
var dibuje = document.querySelector(".dibuje")
var inp = document.querySelector(".inp")
var out = document.querySelector(".out")

/**
 * Realiza acciones después de cargar una imagen.
 * Muestra
 *
 * @function afterCargarImagen
 * @returns {void}
 */
function afterCargarImagen() {
  zonaInput.classList.remove("displayVacio");    
  dibuje.classList.remove("displayVacio"); 
  inp.classList.remove("displayVacio"); 
}

/**
 * Realiza acciones después de dibujar.
 * Muestra
 *
 * @function afterDibujar
 * @returns {void}
 */
function afterDibujar() {
  can.classList.remove("displayVacio");  
  reloj.classList.remove("displayVacio"); 
  out.classList.remove("displayVacio"); 
}

/**
 * Hace visibles los elementos ocultos.
 * Funcion encargada de hacer visible displays
 * @function quitaOculta
 * @returns {void}
 */
function quitaOculta() {
  encabezado.classList.remove("displayVacio")
  btnLimpia.classList.remove("displayVacio")
}

/**
 * Inicia la reproducción del temporizador y realiza acciones asociadas.
 * Llamada a la funcion para correr reloj
 * @function play
 * @returns {void}
 */
function play() {
  quitaOculta();
  // Minutos 
  min = setInterval(() => {
    minCounter++;
    minutos.textContent = minCounter.toString().padStart(2,"0")+ ":";
  },60*1000);
  // Segundos 
  sec = setInterval(() => {
    if (secCounter == 60){
      secCounter = 0
    }
    secCounter++;
    segundos.textContent = secCounter.toString().padStart(2,"0")+ ".";
  },1000);
  // Mili segundos 
  miliSeg = setInterval(() => {
    if (miliCounter == 100){
      miliCounter = 0
    }
    miliCounter++;
    mili.textContent = miliCounter.toString().padStart(2,"0");
  },10);
}

/**
 * Registra una vuelta en el temporizador con el tiempo especificado.
 * Llamada a la funcion para hacer cortes de tiempos 
 * @function lap
 * @param {number} tiempoLap - Tiempo de la vuelta en segundos.
 * @returns {void}
 */
let numeroCorte = 0
function lap(tiempoLap) {
  const li = document.createElement("li");
  const etapa = document.createElement("span");
  const registroTiempo = document.createElement("span");

  li.setAttribute("class", "cadaTiempo");
  etapa.setAttribute("class", "etapa");
  registroTiempo.setAttribute("class", "registroTiempo");

 // console.log("total",tiempoLap)
  parteEntera = Math.floor(tiempoLap);       //segundo
  parteDecimal = tiempoLap.toString().split('.')[1]; //microsegundos

  etapa.textContent = "#"+numeroCorte++
  registroTiempo.textContent =  parteEntera + "." + parteDecimal;
  
  li.append(etapa, registroTiempo);
  laps.append(li);
}
const limpiar = document.querySelector(".limpiaHistorial");

/**
 * Limpia el historial de vueltas.
 * Funcion encargada de limpiar historial 
 * @function reset
 * @returns {void}
 */
function reset() {
//  console.log("eee")
  laps.textContent = "";
  laps.append(limpiar)
}
limpiar.addEventListener("click",reset);

//------------------------------------------------------------ Pre carga Imagen  -------------------------------------------------------------------------------------------

var meta = []
var promedios = []
var fitnessPorGen= []
var tiempoPorGen = []

/**
 * Recarga la página para reiniciarla.
 *
 * @function refrescarPagina
 * @returns {void}
 */
function refrescarPagina() {
  location.reload();
}

activateAnimation();
var enCurso = false; 

/**
 * Realiza la validación y ejecuta acciones dependiendo del estado actual.
 * validar la carga de una imagen para poder comenzar a dibujar 
 *
 * @function validacion
 * @returns {boolean} - Indica si la validación y las acciones se realizaron correctamente.
 */
function validacion() {
  if (enCurso ==false) {
    if ( validarInputs() == true) {
      if (compruebaSeleccion == true ){
        enCurso = true;
        afterDibujar()
        return genetico(meta, cantGen, cantIndi, cantPuntos, cantMutaciones); //meta, cantidadDGeneraciones, cantiddadDIndividuos, cantidaddepuntos, muta
      }
      alert ("Debe de cargar una imagen primero para poder mostrar el dibujo")
      return false
    }
  }
  else {
    refrescarPagina();
    alert("Ingrese nueva imagen para dibujar")
  }
}

/**
 * Carga una imagen seleccionada por el usuario y realiza acciones asociadas.
 * Funcion encargada de previzualisar la imagen a dibujar 
 * @function cargar
 * @returns {void}
 */
function cargar() {
    let imgElement = document.getElementById('imageSrc');
    let inputElement = document.getElementById('fileInput');
    inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    compruebaSeleccion = true;
    }, false);
    
    // Cuando Se carga la imagen
    imgElement.onload = function () {

      let mat = cv.imread(imgElement);
      cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY);
      cv.threshold(mat, mat, 70, 255, 0)
      
      for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {

          if (mat.ucharPtr(i, j)[0] != 255) {
            meta.push([j, i])
          }

        }
      }
      afterCargarImagen();
    }  
}

/**
 * Genera las coordenadas de los puntos a partir de un array dado y crea una imagen con las líneas que conectan los puntos.
 *
 * @function cordenadasdepuntos
 * @param {Array.<Array.<number>>} array - Array de coordenadas de los puntos.
 * @returns {Array.<Array.<number>>} - Array de las coordenadas de los puntos generados.
 */
function cordenadasdepuntos(array) {
  let nueva = new cv.Mat.ones(30, 30, cv.CV_8U);
  nueva.convertTo(nueva, -1, 255);
  for (var i = 0; i < array.length - 1; i++) {
    var x = array[i][0]
    var y = array[i][1]
    var x2 = array[i + 1][0]
    var y2 = array[i + 1][1]
    var p1 = new cv.Point(x, y);
    var p2 = new cv.Point(x2, y2);
    cv.line(nueva, p1, p2, [0, 0, 0, 0], 1);
  }
  cordenadas = []

  for (var i = 0; i < 30; i++) {

    for (var j = 0; j < 30; j++) {

      if (nueva.ucharPtr(i, j)[0] != 255) {
        cordenadas.push([j, i])
      }

    }
  }
  return cordenadas;
};

/**
 * Dibuja las líneas que conectan los puntos en un lienzo con un retraso de 2 segundos.
 *
 * @function dibujar
 * @param {Array.<Array.<number>>} array - Array de coordenadas de los puntos.
 * @returns {void}
 */
function dibujar(array) {
  setTimeout(() => {
    let nueva = new cv.Mat.ones(30, 30, cv.CV_8U);
    nueva.convertTo(nueva, -1, 255);

    for (var i = 0; i < array.length - 1; i++) {
      var x = array[i][0]
      var y = array[i][1]
      var x2 = array[i + 1][0]
      var y2 = array[i + 1][1]
      var p1 = new cv.Point(x, y);
      var p2 = new cv.Point(x2, y2);
      cv.line(nueva, p1, p2, [0, 0, 0, 0], 1);
    }
    cv.imshow('canvasOutput', nueva);
    nueva.delete();
  }, 2000);
};

//-----------------------------------------     Genetico      ------------------------------------------------------------

/**
 * Calcula el fitness de una persona en relación a una meta dada.
 *
 * @function fitness
 * @param {Array.<Array.<number>>} meta - Coordenadas de la meta.
 * @param {Array.<Array.<number>>} persona - Coordenadas de la persona.
 * @returns {number} - Valor de fitness.
 */
function fitness(meta, persona) {
  var fitness = 0
  var puntospersona = cordenadasdepuntos(persona);

  for (var i = 0; i < puntospersona.length; i++) {

    if (JSON.stringify(meta).includes(JSON.stringify(puntospersona[i])) === true) {
      fitness++
    }
  }
  return fitness;
}

/**
 * Selecciona los padres con mejor fitness de una población en relación a una meta dada.
 *
 * @function padres
 * @param {Array.<Array.<number>>} meta - Coordenadas de la meta.
 * @param {Array.<Array.<number>>} poblacion - Población de individuos.
 * @param {number} numeroPadres - Número de padres a seleccionar.
 * @returns {Array.<Array.<number>>} - Array de padres seleccionados.
 */
function padres(meta, poblacion, numeroPadres) {
  var fitConPadre = [];
  var padresConMejorF = [];
  var fitDetodos = [];// a esto  se le saca el promedio 

  for (var persona = 0; persona < poblacion.length; persona++) {
    fitConPadre.push([fitness(meta, poblacion[persona]), poblacion[persona]]);
  }

  fitConPadre.sort(function (a, b) {
    return b[0] - a[0];
  });

  for (var i = 0; i < numeroPadres; i++) {
    padresConMejorF.push(fitConPadre[i][1]);

  }
  for (var i = 0; i < poblacion.length; i++) {
    fitDetodos.push(fitConPadre[i][0]);

  }
  let avg = fitDetodos.reduce((a, b) => a + b) / fitDetodos.length;
  promedios.push(avg);

  return padresConMejorF;
}

/**
 * Realiza la reproducción sexual y mutación de los padres seleccionados.
 *
 * @function sexAndMutate
 * @param {Array.<Array.<number>>} padresConMejorF - Array de padres con mejor fitness.
 * @param {number} mutacion - Probabilidad de mutación.
 * @returns {Array.<Array.<number>>} - Array de descendientes generados.
 */
function sexAndMutate(padresConMejorF, mutacion) {
  var hospital, madre, padre;
  hospital = [];
  padre = [];
  madre = [];
  while (padresConMejorF.length != 0) {

    if (padresConMejorF.length != 1) {

      padre = padresConMejorF.shift()/*Math.floor((Math.random() * ((padresConMejorF.length - 1) - 0 + 1)) + 0));*/

      madre = padresConMejorF.shift()/*Math.floor((Math.random() * ((padresConMejorF.length - 1) - 0 + 1)) + 0));*/
      hospital.push(padre);
      /* hospital.push(padre.slice(0, (Math.trunc(padre.length / 2))).concat(madre.slice((Math.trunc(madre.length / 2)))));*/
      hospital.push(madre.slice(0, (Math.trunc(madre.length / 2))).concat(padre.slice((Math.trunc(padre.length / 2)))));
      hospital.push(padre.slice(0, (Math.trunc(padre.length / 2) + 1)).concat(madre.slice((Math.trunc(madre.length / 2) + 1))));
      /* hospital.push(madre.slice(0, (Math.trunc(madre.length / 2) + 1)).concat(padre.slice((Math.trunc(padre.length / 2) + 1))));*/
      hospital.push(madre.slice((Math.trunc(madre.length / 2))).concat(padre.slice(0, (Math.trunc(padre.length / 2)))));
      /* hospital.push(padre.slice((Math.trunc(padre.length / 2))).concat(madre.slice(0, (Math.trunc(madre.length / 2)))));*/
    } else {
      padre = padresConMejorF.pop();

      hospital.push(padre);
    }
  }
  //mutar tiene que ser su propia funcion 
  for (var i = 0; i < hospital.length ; i++) {

    for (var j = 0; j < hospital[i].length; j++) {
      if (!( i === 0)) {
        if (Math.random() < mutacion) {
          hospital[i][j] = [Math.floor((Math.random() * ((30 - 0 + 1)) + 0))].concat([Math.floor((Math.random() * ((30 - 0 + 1)) + 0))])

        }
      }
    }
  }
  return hospital
}

/**
 * Genera una población inicial de personas con coordenadas aleatorias.
 *
 * @function poblacion
 * @param {number} CantidadDePersonas - Cantidad de personas en la población.
 * @param {number} NumeroDeGenes - Número de genes (coordenadas) por persona.
 * @returns {Array.<Array.<Array.<number>>>} - Población generada.
 */
function poblacion(CantidadDePersonas, NumeroDeGenes) {
  var poblacion = []
  for (var i = 0; i < CantidadDePersonas; i++) {
    var number_list = [];
    for (var j = 0; j < NumeroDeGenes; j++) {
      number_list.push([Math.floor((Math.random() * ((30 - 0 + 1)) + 0))].concat([Math.floor((Math.random() * ((30 - 0 + 1)) + 0))]))
    }
    poblacion.push(number_list)
  }
  return poblacion
}


/**
 * Genera una población inicial de personas con coordenadas aleatorias.
 *
 * @function poblacion
 * @param {number} CantidadDePersonas - Cantidad de personas en la población.
 * @param {number} NumeroDeGenes - Número de genes (coordenadas) por persona.
 * @returns {Array.<Array.<Array.<number>>>} - Población generada.
 */
function genetico(meta, cantidadDGeneraciones, cantiddadDIndividuos, cantidaddepuntos, muta) {
  var starTime = Date.now();
  var generaciones = 0;
  var pobla = poblacion(cantiddadDIndividuos, cantidaddepuntos)
  var listo = false;
  var lenMeta = meta.length;
  var cantidaddegenereciones = cantidadDGeneraciones;
  var mutacion = muta / 100

  while (listo != true && cantidaddegenereciones != generaciones) {
    var empieza = Date.now();
    var x = 0;
    var papas = padres(meta, pobla, Math.trunc(pobla.length / 2));
    dibujar(papas[0]);
    fitnessPorGen.push(fitness(meta, papas[0]));
    console.log(fitness(meta, papas[0]),lenMeta);
    if (fitness(meta, papas[0]) == lenMeta) {
      dibujar(papas[0]);
      console.log("listo");
      listo = true
      var termina = Date.now();
      tiempoPorGen.push((termina - empieza) / 1000);
   //   console.log("deberia", (termina - empieza) / 1000)
      lap((termina - empieza) / 1000)
    } 

    else {
      pobla = sexAndMutate(papas, mutacion);
      generaciones++
      var termina = Date.now();
      tiempoPorGen.push((termina - empieza) / 1000);
   //   console.log("deberia", (termina - empieza) / 1000)
      lap((termina - empieza) / 1000)
    }
  }
  var endTime = Date.now();
  tiempoo = (endTime-starTime)/1000
  parteEntera = Math.floor(tiempoo);       //segundo
  parteDecimal = tiempoo.toString().split('.')[1]; //microsegundos
  minutos.textContent = "Segundos" + ":"; // mins
  segundos.textContent = parteEntera+ ".";
  mili.textContent =  parteDecimal;
  quitaOculta() 
  showInfo() 
  var mychart = creaGrafico();
  mychart; 
}

/**
 * Crea un array de números consecutivos desde 0 hasta el valor de entrante - 1.
 *
 * @function creaArray
 * @param {number} entrante - Valor límite del array.
 * @returns {Array.<number>} - Array de números consecutivos.
 */
function creaArray (entrante) {
  var res = [];
  for(var i = 0 ; i<entrante.length ; i++) {
    res.push(i)
  }
  return res
};

/**
 * Crea y devuelve un gráfico utilizando la biblioteca Chart.js.
 *
 * @function creaGrafico
 * @returns {Chart} - Objeto Chart que representa el gráfico generado.
 */
function creaGrafico() {
  const ctx = document.getElementById('mychart');
    var mychart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: creaArray(promedios),
        datasets: [{
          label: 'Fitness',
          data: fitnessPorGen ,
          borderWidth: 1,
          borderColor: "#DB3069",
          backgroundColor: "#DB3069"
        },
        {
          label: 'Fitness Promedio',
          data: promedios,
          borderColor: "#7F00FF",
          backgroundColor: "#7F00FF"
        }  
      ],
        
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estadisticas'
          }
        }
      } 
    });
  return mychart}

//----------------------     Animacion de carga      -------------------------------------------------------------


/**
 * Agrega animaciones a los elementos HTML con la clase "caja" utilizando CSS y variables personalizadas.
 *
 * @function activateAnimation
 */
function activateAnimation() {
  const cajas = document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++) {
    const caja = cajas[i];
    caja.classList.add("caja-after");
    caja.style.setProperty("--animation-name", `squidge-${i}`);
  }
}

var prepre = document.querySelector(".preCarga")
function showInfo() {
  prepre.classList.remove("displayVacio");
}
