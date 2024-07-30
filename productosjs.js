
const productos = [
    {
        categoria: "placas",
        nombre: "Nvidia RTX 4090",
        precio:"$950000",
        stock:2,
        img:"./imgs/placas/RTX 4090 GYGABYTE.jpg"
    },

    {
        categoria: "placas",
        nombre:"Amd Rx 7900XTX",
        precio:"$620000",
        stock:0,
        img:"./imgs/placas/7900XTX.jpg"
    },

    {
        categoria: "placas",
        nombre:"Nvidia RTX 4080",
        precio:"$780000",
        stock:10,
        img:"./imgs/placas/rtx4080.jpg"
    },

    {
        categoria: "placas",
        nombre:"Amd Rx 7900XT",
        precio:"$520000",
        stock:0,
        img:"./imgs/placas/7900XT.jpg"
    },

    {
        categoria: "placas",
        nombre:"Amd Rx 6900XT",
        precio:"$230000",
        stock:8,
        img:"./imgs/placas/6900XT.png"
    },

    {
        categoria: "placas",
        nombre:"Nvidia RTX 3090",
        precio:"$330000",
        stock:12,
        img:"./imgs/placas/RTX3090.jpg"
    },

    {
        categoria: "placas",
        nombre:"Nvidia RTX 3080TI",
        precio:"$220000",
        stock:15,
        img:"./imgs/placas/3080ti.webp"
    },

    {
        categoria: "placas",
        nombre:"Amd Rx 6700XT",
        precio:"$200000",
        stock:10,
        img:"./imgs/placas/6700XT.webp"
    },

    {
        categoria: "placas",
        nombre:"Amd Rx 6800XT",
        precio:"$200000",
        stock:10,
        img:"./imgs/placas/6800XT.png"
    },

    {
        categoria: "notebooks",
        nombre: "MSI Gf63 Thin Gtx 1650",
        precio:"$200000",
        stock:25,
        img:"./imgs/nets/msi1650.webp"
    },

    {
        categoria: "notebooks",
        nombre: "MSI Gf65 thin 3060",
        precio:"$350000",
        stock:27,
        img:"./imgs/nets/msi3060.jpg"
    },

    {
        categoria: "notebooks",
        nombre: "GIGABYTE I7 12TH 3070TI",
        precio:"$550000",
        stock:26,
        img:"./imgs/nets/3070net.png"
    },

    {
        categoria: "procesadores",
        nombre:"INTEL I9 13900K",
        precio:"$350000",
        stock:25,
        img:"./imgs/proces/i913gen.png"
    },

    {
        categoria: "procesadores",
        nombre:"INTEL I9 12900K",
        precio:"$190000",
        stock:20,
        img:"./imgs/proces/i912gen.jpg"
    },

    {
        categoria: "procesadores",
        nombre:"AMD R9 7900X",
        precio:"$200000",
        stock:30,
        img:"./imgs/proces/R97900X.webp"
    },

    {
        categoria: "procesadores",
        nombre:"AMD R9 5900X",
        precio:"$200000",
        stock:40,
        img:"./imgs/proces/R95900X.jpg"
    },

]


const note = document.getElementById("Notebooks")
const proc = document.getElementById("Procesadores")
const plac = document.getElementById("Placas de video")
const moth = document.getElementById("Mothers")
const ram = document.getElementById("Rams")
const fuen = document.getElementById("Fuentes")
const gab = document.getElementById("Gabinetes")
const link = document.getElementById("links")
let card = document.getElementById("cards-template")

const onlynet = productos.filter((productos) => productos.categoria == "notebooks")
const onlyplac = productos.filter((productos) => productos.categoria == "placas")
const onlyproc = productos.filter((productos) => productos.categoria == "procesadores")

note.addEventListener("click", () => {
    onlynet.map((onlynet) => {
        card.innerHTML += `
        <div class="card">
          <img src="${onlynet.img}">
          <h4>${onlynet.nombre}</h4>
          <p>${onlynet.precio}</p>
          <button id="agregar${onlynet.id}"type="button" class="button" href="#">Comprar</button>
       </div>
        `
    
    })
})
    
plac.addEventListener("click", () => {
    onlyplac.map((onlyplac) => {
        card.innerHTML += `
        <div class="card">
          <img src="${onlyplac.img}">
          <h4>${onlyplac.nombre}</h4>
          <p>${onlyplac.precio}</p>
          <button id="agregar${onlyplac.id}"type="button" class="button" href="#">Comprar</button>
       </div>
        `
    
    })
})

proc.addEventListener("click", () => {
    onlyproc.map((onlyproc) => {
        card.innerHTML += `
        <div class="card">
          <img src="${onlyproc.img}">
          <h4>${onlyproc.nombre}</h4>
          <p>${onlyproc.precio}</p>
          <button id="agregar${onlyproc.id}"type="button" class="button" href="#">Comprar</button>
       </div>
        `
    
    })
})