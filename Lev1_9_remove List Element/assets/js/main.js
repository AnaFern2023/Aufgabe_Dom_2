console.log("hi");

const farbauswahl = document.querySelector('#farbeAuswahlen');
const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const index = farbauswahl.selectedIndex


    switch (index) {
        case 0:
            farbauswahl[0].remove()
            break;
        case 1:
            farbauswahl[1].remove()
            break;
        case 2:
            farbauswahl[2].remove()
            break;
        case 3:
            farbauswahl[3].remove()
            break;
        case 4:
            farbauswahl[4].remove()
            break;
        case 5:
            farbauswahl[5].remove()
            break;
        case 6:
            farbauswahl[6].remove()
            break;
        case 7:
            farbauswahl[7].remove()
            break;
        case 8:
            farbauswahl[8].remove()
            break;
        case 9:
            farbauswahl[9].remove()
            break;
    }
})