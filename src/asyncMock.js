{/*const products = [
    {
        id: "1",
        name: "Calathea",
        price: 8000,
        category: "plantas",
        img: "https://acdn.mitiendanube.com/stores/001/202/679/products/calathea-triostar-nube1-d88d494c85f8f7962e15912401301164-1024-1024.webp",
        stock: 10,
        description: "Planta de interior"
    },
    {id: "2", name: "Maceta Clásica TA n° 30", price: 2000, category: "macetas", img: "https://arcencohogar.vtexassets.com/arquivos/ids/288407-1200-1200?v=637651667658400000&width=1200&height=1200&aspect=true", stock: 10, description:"Maceta plástica marca TA número 30"},
    {id: "3", name: "Momboreta cochinilla", price: 6000, category: "quimicos", img: "https://i0.wp.com/cogolloshermanos.com/wp-content/uploads/2020/09/D_808481-MLA43238814178_082020-O.jpg?w=454&ssl=1", stock: 10, description:"  "}
]*/}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
    }, 100)
        })
        
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
    }, 100)
        })
        
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === itemId))
    }, 100)
        })
        
}