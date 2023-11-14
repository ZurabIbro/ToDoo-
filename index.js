const list = document.getElementById('list')
const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = input.value

    const checkBox = document.createElement('input')
    checkBox.type = 'checkBox'
    li.prepend(checkBox)

    const delButton = document.createElement('button')
    delButton.textContent = 'x'

    checkBox.addEventListener('click', (e) => {
        e.target.parentElement.style.opacity = '0.5'
        delButton.remove()

    })

    delButton.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    li.append(delButton)
    input.value = ''
    list.append(li)

    
})

