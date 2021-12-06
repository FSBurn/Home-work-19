const block = document.querySelector(`div.block`);

const mytRandom = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(()=>{
    block.style.left = `${Math.round(mytRandom(0,window.innerWidth-block.offsetWidth-10))}px`;
},1000)

setInterval(()=>{
    block.style.top = `${Math.round(mytRandom(0,window.innerHeight-block.offsetHeight-10))}px`;
},1000)

setInterval(()=>{
    block.style.background = `rgb(${mytRandom(0,255)},${mytRandom(0,255)},${mytRandom(0,255)})`;
},1000)





