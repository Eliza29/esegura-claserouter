const express = require('express')
const { Router } = express
const ProductosApi = require('./api/productos.js')

// router de productos
const productosApi = new ProductosApi()

const productosRouter = new Router()
productosRouter.use(express.json());
productosRouter.use(express.urlencoded({ extended: true }));


//RUTAS LLAMANDO A LOS METODOS DE LA CLASE
productosRouter.get('/', (req, res) => {
   res.json(productosApi.listarAll())
})

productosRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json(productosApi.listar(id))
});

productosRouter.post('/', (req, res) => {
    res.json(productosApi.guardar(req.body) )
})
productosRouter.put('/:id', (req, res, ) => {
    const id = req.params.id;
    res.json(productosApi.actualizar(req.body,id))
});

productosRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json(productosApi.borrar(id))
});

// servidor
const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
