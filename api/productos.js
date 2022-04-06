class ProductosApi {
    constructor() {
        this.id = 0
        this.productos = [
            {
            title: "Escuadra",
            price: 20,
            thumbnail: "https://realplaza.vtexassets.com/arquivos/ids/19829632-800-auto?v=637784438719930000&width=800&height=auto&aspect=true",
            id: ++this.id
            }
        ]
    }

    listar(id) {
        const product = this.productos.find(product=>product.id == id);
        return product?product:{error:'producto no encontrado'}
    }

    listarAll() {
        return this.productos?this.productos:{error:'producto no encontrado'}
    }

    guardar(prod) {
        const product = {...prod, id:++this.id}
        this.productos.push(product);
        console.log(this.productos, 'lista de productos')
        return product;
    }

    actualizar(prod, id) {
        const findproduct = this.productos.find(product=>product.id == id);
        const product = {...prod, id:id}

        if(findproduct){
            const updateproduct = this.productos.map((el, index)=>{
                if(el.id == id){
                   return el=product
                }
            })
            this.productos = updateproduct
            console.log(this.productos, 'this.productos')
            return updateproduct
        }else{
           return {error:'producto no encontrado'}
        }
    }

    borrar(id) {
        const newList = this.productos.filter((product)=>product.id != id);
        return id?this.productos=newList: {error:'producto no encontrado'}
        
    }
}

// export default ProductosApi
module.exports = ProductosApi