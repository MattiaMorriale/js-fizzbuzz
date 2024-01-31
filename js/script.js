// dobbiamo creare una costante che ci servirà per creare una griglia di quadratini numerati
const gridElement = document.querySelector("#grid")

for (let i = 1; i <= 100; i++) {

    // DICHIARO UNA COSTANTE NEWELEMENT E GLI DO LA STILIZZAZIONE
    const newElement = document.createElement("div");
    gridElement.append(newElement);
    newElement.innerHTML = i;
    newElement.className = "square"
    newElement.style.backgroundColor = "#1389b2"
    newElement.style.fontSize = "25px";

    // PRENDERE I MULTIPLI DI 3
    if (i % 3 === 0) {

        newElement.innerText = "Fizz"
        newElement.style.backgroundColor = "#0cd6a1"

    // PRENDERE I MULTIPLI DI 5 
    } else if (i % 5 === 0) {

        newElement.innerText = "Buzz"
        newElement.style.backgroundColor = "#ffd166"
    
    // PRENDERE I MULTIPLI DI 15
    } if (i % 15 === 0) {

        newElement.innerText = "FizzBuzz"
        newElement.style.backgroundColor = "#f0466f"

    }
}