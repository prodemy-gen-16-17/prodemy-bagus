const productList = require("./product-list.json") 

// console.log(productList)

// filter product yang ratingnya 5
console.log(productList.filter(product => product.rating == 5))


// filter product yang harganya < 200_000
console.log(productList.filter(product => {
    const harga = parseInt(product.harga.split(".").filter(h => h !== ".").join(""))

    return harga < 200_000
}))

