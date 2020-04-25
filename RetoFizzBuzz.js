var analizar = 27;


if (analizar % 3 === 0 & analizar % 5 === 0) {
    console.info("FizzBuzz");
} else if (analizar % 5 === 0) {
    console.info("Buzz");
} else if (analizar % 3 === 0 ) {
    console.log("Fizz");
} else {
    console.warn("No hay compatibilidad");
}
