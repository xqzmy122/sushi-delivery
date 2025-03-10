console.log('beg')
function increaseValue(event) {
    console.log('вызвалась')
    const parentContainer = event.target.closest('div')

    if(!parentContainer) {
        return 'not found'
    }

    const currentElement = parentContainer.querySelector('.items__current')
    console.log(currentElement.textContent)
}


document.addEventListener('click', (event) => {
    if(event.target && event.target.getAttribute('data-action') === 'plus') {
        console.log(event.target.className)
        console.log(event.target.closest('div'))
    }
})