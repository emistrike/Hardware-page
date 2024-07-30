const header = document.querySelector("#header")
const contenedor = document.querySelector("#cards-template")
const body = document.querySelector("body")


let placas = [
    {
        id:1,
        nombre: "Nvidia RTX 4090",
        precio:"$950000",
        stock:2,
        img:"./imgs/placas/RTX 4090 GYGABYTE.jpg"
    },

    {
        id:2,
        nombre:"Amd Rx 7900XTX",
        precio:"$620000",
        stock:0,
        img:"./imgs/placas/7900XTX.jpg"
    },

    {
        id:3,
        nombre:"Nvidia RTX 4080",
        precio:"$780000",
        stock:10,
        img:"./imgs/placas/rtx4080.jpg"
    },

    {
        id:4,
        nombre:"Amd Rx 7900XT",
        precio:"$520000",
        stock:0,
        img:"./imgs/placas/7900XT.jpg"
    },

    {
        id:5,
        nombre:"Amd Rx 6900XT",
        precio:"$230000",
        stock:8,
        img:"./imgs/placas/6900XT.png"
    },

    {
        id:6,
        nombre:"Nvidia RTX 3090",
        precio:"$330000",
        stock:12,
        img:"./imgs/placas/RTX3090.jpg"
    },

    {
        id:7,
        nombre:"Nvidia RTX 3080TI",
        precio:"$220000",
        stock:15,
        img:"./imgs/placas/3080ti.webp"
    },

    {
        id:8,
        nombre:"Amd Rx 6700XT",
        precio:"$200000",
        stock:10,
        img:"./imgs/placas/6700XT.webp"
    },

    {
        id:9,
        nombre:"Amd Rx 6800XT",
        precio:"$200000",
        stock:10,
        img:"./imgs/placas/6800XT.png"
    },


]


let card = document.getElementById("cards-template")

let carrito = [];

placas.map((placas) => {
    card.innerHTML += `
    <div class="card">
      <img src="${placas.img}">
      <h4>${placas.nombre}</h4>
      <p>${placas.precio}</p>
      <button id="agregar${placas.id}"type="button" class="button" href="#">Comprar</button>
   </div>
    `

})

const btnCart = document.querySelector('.container-icon')
