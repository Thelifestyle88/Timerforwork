const hoursElement = document.querySelector('.hour')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const lapButton = document.querySelector('.lap')
const clearButton = document.querySelector('.clear')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    stopTimer()
})

let hour = 0,
    minutes = 0,
    second = 0,
    interval,
    counter = 0

function startTimer() {
    second++
    if (second < 10) {
        secondsElement.innerText = '0' + second
    }
    if (second > 9) {
        secondsElement.innerText = second
    }

    if (second > 59) {
        minutes++
        minutesElement.innerText = '0' + minutes
        second = 0
        secondsElement.innerText = '0' + second
    }
    if (minutes < 10) {
        minutesElement.innerText = '0' + minutes
    }
    if (minutes > 9) {
        minutesElement.innerText = minutes
    }
    if (minutes > 59) {
        hour++
        hoursElement.innerText = '0' + hour
        minutes = 0
        minutesElement.innerText = '0' + minutes
    }
    if (hour < 9) {
        hoursElement.innerText = '0' + hour
    }
    if (hour > 9) {
        hoursElement.innerText = hour
    }
}

function stopTimer() {
    hour = 00
    minutes = 00
    second = 00
    hoursElement.textContent = '00'
    minutesElement.textContent = '00'
    secondsElement.textContent = '00'
}

lapButton.addEventListener('click', () => {
    counter++
    const result = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results__info')
    block.innerHTML = `Result ${counter}: ${hour}: ${minutes}: ${second}`
    result.append(block)
})

clearButton.addEventListener('click', () => {
    for (let i = 0; i < counter; i++) {
        const block = document.querySelector('.results__info')
        block.remove()
    }
    counter = 0
})