// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function ejercicio1(miCadena) {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error('El valor introducido no es una cadena de texto')
    } else {
      return miCadena.length
    }
  } catch (error) {
    console.error(error)
  }
}

// Con arrowFunctions

let ejercicio1a = (miCadena) => {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error('El valor introducido no es una cadena de texto')
    } else {
      return miCadena.length
    }
  } catch (error) {
    console.error(error)
  }
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function ejercicio2(miCadena, numCaracteres) {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error(`El valor ${miCadena} no es una cadena de texto`)
    } else if (typeof numCaracteres !== 'number') {
      throw new Error(`El valor ${numCaracteres} no es un número`)
    } else {
      return miCadena.slice(0, numCaracteres)
    }
  } catch (error) {
    console.error(error)
  }
}

// Con arrow function

const ejercicio2a = (miCadena, numCaracteres) => {
  try {
    if (typeof miCadena !== 'string')
      throw new Error(`El valor ${miCadena} no es una cadena de texto`)
    if (typeof numCaracteres !== 'number')
      throw new Error(`El valor ${numCaracteres} no es un número`)
    if (numCaracteres > miCadena.length)
      throw new Error(
        `El valor ${numCaracteres} es mayor que la longitud de la cadena`,
      )
    return miCadena.slice(0, numCaracteres)
  } catch (error) {
    console.error(error)
  }
}

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function ejercicio3(miCadena, caracter) {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error(`El valor ${miCadena} no es una cadena de texto`)
    } else {
      return miCadena.split(caracter)
    }
  } catch (error) {
    console.error(error)
  }
}

// con arrowfunction
const ejercicio3a = (miCadena, caracter) => {
  typeof miCadena !== 'string'
    ? console.error(`El valor ${miCadena} no es una cadena de texto`)
    : console.log(miCadena.split(caracter))
}

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function ejercicio4(miCadena, repeticiones) {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error(`El valor ${miCadena} no es una cadena de texto`)
    } else if (typeof repeticiones !== 'number') {
      throw new Error(`El valor ${repeticiones} no es un número`)
    } else {
      return miCadena.repeat(repeticiones)
    }
  } catch (error) {
    console.error(error)
  }
}

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const ejercicio5 = (miCadena) => {
  try {
    if (typeof miCadena !== 'string') {
      throw new Error(`El valor ${miCadena} no es una cadena de texto`)
    }
    let cadenaInvertida = miCadena.split('').reverse().join('')
    return cadenaInvertida
  } catch (error) {
    console.error(error)
  }
}

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const ejercicio6 = (miCadena, palabra) => {
  try {
    if (typeof miCadena !== 'string' || typeof palabra !== 'string') {
      throw new Error(
        `El valor ${miCadena} o ${palabra} no es una cadena de texto`,
      )
    }
    let contador = 0
    let buscar = palabra.toLowerCase()
    let palabras = miCadena.toLowerCase().split(' ')
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === buscar) {
        contador++
      }
    }
    return console.log(contador)
  } catch (error) {}
}

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const ejercicio7 = (palabra) => {
  try {
    if (typeof palabra !== 'string') {
      throw new Error(`El valor ${palabra} no es una cadena de texto`)
    }
    let palabraInvertida = palabra.split('').reverse().join('')

    if (palabra !== palabraInvertida) {
      return console.log(`la palabra ${palabra} no es un palíndromo`)
    }
    return console.log(`la palabra ${palabra} es un palíndromo`)
  } catch (error) {
    console.error(error)
  }
}

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5

const ejercicio8 = (miCadena, caracter) => {
  try {
    if (typeof miCadena !== 'string' || typeof caracter !== 'string') {
      throw new Error(
        `El valor ${miCadena} o ${caracter} no es una cadena de texto`,
      )
    }
    let cadenaSinCaracter = miCadena.replace(RegExp(caracter, 'ig'), '')
    return console.log(cadenaSinCaracter)
  } catch (error) {
    console.error(error)
  }
}

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const ejercicio9 = () => {
  let numero = Math.floor(Math.random() * 100) + 500
  return console.log(numero)
}

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const ejercicio10 = (numero) => {
  let numeroInvertido = numero.toString().split('').reverse().join('')
  if (numero === Number(numeroInvertido)) {
    return console.log(`${numero} es capicúa`)
  } else {
    return console.log(`${numero} no es capicúa`)
  }
}
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const ejercicio11 = (numero) => {
  try {
    if (typeof numero !== 'number') {
      throw new Error(`El valor ${numero} no es un número`)
    }
    for (let i = numero; i > 1; i--) {
      numero *= i - 1
    }
    return console.log(numero)
  } catch (error) {
    console.error(error)
  }
}

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const ejercicio12 = (numero) => {
  try {
    if (typeof numero !== 'number') {
      throw new Error(`El valor ${numero} no es un número`)
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return console.log(`${numero} no es primo`)
        break
      }
    }
    return console.log(`${numero} es primo`)
  } catch (error) {
    console.error(error)
  }
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const ejercicio13 = (numero) => {
  try {
    if (typeof numero !== 'number') {
      throw new Error(`El valor ${numero} no es un número`)
    }
    if (numero % 2 === 0) {
      return console.log(`${numero} es par`)
    }
    return console.log(`${numero} es impar`)
  } catch (error) {
    console.error(error)
  }
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const ejercicio14 = (numero, tipo) => {
  tipoLectura = ['C', 'F']
  try {
    if (typeof numero !== 'number') {
      throw new Error(`El valor ${numero} no es un número`)
    }
    if (tipoLectura.indexOf(tipo) === -1) {
      throw new Error(`El valor ${tipo} no es un tipo de temperatura`)
    }
    if (tipo === 'C') {
      return console.log(`${numero}°C son ${(numero * 9) / 5 + 32}°F`)
    } else {
      return console.log(`${numero}°F son ${((numero - 32) * 5) / 9}°C`)
    }
  } catch (error) {
    console.error(error)
  }
}

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const ejercicio15 = (num, base) => {
  try {
    if (typeof num !== 'number') {
      throw new Error(`El valor ${num} no es un número`)
    }
    if (typeof base !== 'number') {
      throw new Error(`El valor ${base} no es un número`)
    }
    if (base !== 2 && base !== 10) {
      throw new Error(`El valor ${base} no es una base válida`)
    }
    if (base === 2) {
      return console.log(`${num} en base ${base} es ${num.toString(base)}`)
    } else if (base === 10) {
      return console.log(`${num} en base ${base} es ${parseInt(num, 2)}`)
    }
  } catch (error) {
    console.error(error)
  }
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const ejercicio16 = (valor, descuento) => {
  try {
    if (typeof valor !== 'number') {
      throw new Error(`El valor ${valor} no es un número`)
    }
    if (typeof descuento !== 'number') {
      throw new Error(`El valor ${descuento} no es un número`)
    }
    return console.log(
      `El valor final es igual a ${valor - (valor * descuento) / 100}`,
    )
  } catch (error) {
    console.error(error)
  }
}

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const ejercicio17 = (fecha) => {
  try {
    if (!fecha instanceof Date) {
      throw new Error(`El valor ${fecha} no es una fecha`)
    }
    let fechaActual = new Date()
    let fechaDada = new Date(fecha)
    let años = fechaActual.getFullYear() - fechaDada.getFullYear()
    return console.log(`Han pasado ${años} años`)
  } catch (error) {
    console.error(error)
  }
}

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const ejercicio18 = (cadena) => {
  try {
    if (typeof cadena !== 'string') {
      throw new Error(`El valor ${cadena} no es una cadena`)
    }
    let cadenaArray = cadena.split('')
    let vocalesContadas = 0

    for (const letras of cadena) {
      console.log(letras)
      if (/[aeiou]/i.test(letras)) {
        vocalesContadas++
      }
    }

    return console.log(
      `Vocales: ${vocalesContadas}, Consonantes: ${
        cadenaArray.length - vocalesContadas
      }`,
    )
  } catch (error) {
    console.error(error)
  }
}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const ejercicio19 = (cadena) => {
  try {
    if (typeof cadena !== 'string') {
      throw new Error(`El valor ${cadena} no es una cadena`)
    } else {
      let cadenaValida = false
      if (/([A-Z])\w+/.test(cadena)) {
        cadenaValida = true
      }
    }
    return console.log(cadenaValida)
  } catch (error) {
    console.error(error)
  }
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const ejercicio20 = (correo) => {
  try {
    if (typeof correo !== 'string') {
      throw new Error(`El valor ${correo} no es una cadena`)
    }
    let correoValido = false
    if (
      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
        correo,
      )
    ) {
      correoValido = true
    } else {
      throw new Error(`El correo ${correo} no es válido`)
    }
    return console.log(`El correo ${correo} es válido`)
  } catch (error) {
    console.error(error)
  }
}

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const ejercicio21 = () => {
  try {
    let array = [1, 4, 5]
    let arrayCuadrado = []
    for (const numero of array) {
      arrayCuadrado.push(numero ** 2)
    }
    return console.log(arrayCuadrado)
  } catch (error) {
    console.error(error)
  }
}

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const ejercicio22 = () => {
  try {
    let array = [1, 4, 5, 99, -60]
    let arrayOrdenado = array.sort()
    console.log(arrayOrdenado)
    return console.log(
      `El número más alto es ${
        arrayOrdenado[arrayOrdenado.length - 1]
      } y el más bajo es ${arrayOrdenado[0]}`,
    )
  } catch (error) {
    console.error(error)
  }
}

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ejercicio23 = () => {
  try {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let arrayPares = []
    let arrayImpares = []
    for (const numero of array) {
      if (numero % 2 === 0) {
        arrayPares.push(numero)
      } else {
        arrayImpares.push(numero)
      }
    }
    return console.log({
      pares: arrayPares,
      impares: arrayImpares,
    })
  } catch (error) {
    console.error(error)
  }
}

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ejercicio24 = () => {
  try {
    let array = [7, 5, 7, 8, 6]
    let arrayOrdenado = array.sort()
    let arrayOrdenadoInverso = arrayOrdenado.reverse()
    return console.log({
      asc: arrayOrdenado,
      desc: arrayOrdenadoInverso,
    })
  } catch (error) {
    console.error(error)
  }
}
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const ejercicio25 = () => {
  try {
    let array = ['x', 10, 'x', 2, '10', 10, true, true]
    let arraySinDuplicados = [...new Set(array)]
    return console.log(arraySinDuplicados)
  } catch (error) {
    console.error(error)
  }
}

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const ejercicio26 = () => {
  try {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let suma = 0
    for (const numero of array) {
      suma += numero
    }
    return console.log(suma / array.length)
  } catch (error) {
    console.error(error)
  }
}

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// // // * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western

const ejercicio27 = () => {
  try {
    class Pelicula {
      constructor(id, titulo, director, año, paises, generos, calificacion) {
        this.id = id
        this.titulo = titulo
        this.director = director
        this.año = año
        this.paises = paises
        this.generos = generos
        this.calificacion = calificacion
      } //Faltan las validaciones

      fichaTecnica() {
        return `${this.titulo} - ${this.director} - ${this.año} - ${this.paises} - ${this.generos} - ${this.calificacion}`
      }
    }
    let pelicula1 = new Pelicula(
      'tt0111161',
      'The Shawshank Redemption',
      'Frank Darabont',
      '1994',
      ['USA', 'France'],
      ['Crime', 'Drama'],
      9.3,
    )
  } catch (error) {
    console.error(error)
  }
}
