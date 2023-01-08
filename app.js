updateClock()

function updateClock() {
    const now = new Date(); 
    const us = now.toLocaleTimeString("en-US")
// console.log(us)
    const hour = ((now.getHours() + 11) % 12 + 1) * 30
    const minute = now.getMinutes() * 6
    const second = now.getSeconds() * 6
    document.querySelector('.second').style.transform = `rotate(${-90 + second}deg)`
    document.querySelector('.minute').style.transform = `rotate(${-90 +minute}deg)`
    document.querySelector('.hour').style.transform = `rotate(${-90 +hour}deg)`
}

setInterval(updateClock, 1000)


