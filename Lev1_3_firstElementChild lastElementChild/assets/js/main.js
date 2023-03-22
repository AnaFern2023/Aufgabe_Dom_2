console.log("hi");

const myList = document.querySelector('#myList')
const buttonList = document.querySelectorAll('button');
let output = document.querySelector('output')

console.log(buttonList);
console.log(myList);

buttonList[0].addEventListener('click', () => {
    console.log(myList.firstElementChild.innerHTML);
    output.innerHTML = myList.firstElementChild.innerHTML
})
buttonList[1].addEventListener('click', () => {
    console.log(myList.lastElementChild.innerHTML);
    output.innerHTML = myList.lastElementChild.innerHTML
})
buttonList[2].addEventListener('click', () => {
    console.log(myList.firstElementChild.innerHTML);
    output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML
})
buttonList[3].addEventListener('click', () => {
    console.log(myList.lastElementChild.innerHTML);
    output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML
})