var analizar = 15;

if (analizar % 3 === 0 || analizar % 5 === 0) {
if (analizar % 3 === 0) {
    console.info("Fizz");
}
if (analizar % 5 === 0) {
    console.info("Buzz");
}
if (analizar % 3 === 0 || analizar % 5 === 0) {
    console.log("FizzBuzz");
}
else {
    console.warn("No hay compatibilidad");
}}
