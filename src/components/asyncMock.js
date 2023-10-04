const products = [
    {
        id: "1",
        name: "Rtx 3060 ti",
        price: 150000,
        category: "GPU",
        img:"https://www.comeros.com.ar/wp-content/uploads/2023/06/DUAL-RTX3060TI-O8GD6X.webp",
        stock: 10,
        description: "Grafica 3060ti nvidia"
    },
    {
        id: "2",
        name: "intel-Celeron",
        price: 10000,
        category: "CPU",
        img:"https://arwan.com.ar/wp-content/uploads/2022/05/Sin-titulo-15.png",
        stock: 5,
        description: "Procesador malo"
    },
    {
        id: "3",
        name: "Teclado Hyperx",
        price: 7000,
        category: "Teclado",
        img:"https://www.venex.com.ar/products_images/1635193591_hx-product-keyboard-alloy-origins-60-us-1-zm-lg.jpg",
        stock: 10,
        description: "Teclado mecanico Hyperx"
    }
]

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}