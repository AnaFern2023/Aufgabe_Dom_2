console.log("hi");

// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
// Den HTML- und CSS-Code findest du im Kommentarbereich.
// Nutze:
// querySelector()
// addEventListener()
// let counter = 0;
// createElement()
// textContent()
// appendChild()
// classList

let section = document.querySelector('.umwickeln');
const button = document.querySelector('button');
// const rechteck = document.createElement('div');
const kreis = document.createElement('div')

let counter = 0

button.addEventListener('click', () => {
    // event.preventDefault

    console.log("counter: " + counter);
    let div = document.createElement('div')

    if (counter % 10 == 0) {
        div.textContent = counter
        section.appendChild(div).classList.add("weiss")
    }
    else {
        div.textContent = counter
        section.appendChild(div).classList.add("rechteck")
    }
    counter++
})









        // (div).textContent = "Hi"
        // kreis.textContent += counter
        // document.body.appendChild(kreis)
        // kreis.className = "weiss"

