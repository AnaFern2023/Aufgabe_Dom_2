console.log("hi");


const liste = document.querySelector('ul')
console.log(liste);
const enter = document.querySelector('#enter')
const userinput = document.querySelector('#userinput')

enter.addEventListener('click', () => {
    console.log(userinput.value);
    let li = document.createElement('li')
    li.textContent = userinput.value
    console.log(li);
    liste.appendChild(li);
})
