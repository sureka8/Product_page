export const load = async ({fetch}) => {
	
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    const products= data.products


return {
    products: products,
}

}