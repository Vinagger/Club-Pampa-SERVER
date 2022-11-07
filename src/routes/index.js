const { Router } = require('express')
const router = Router()
const fs = require('fs')

// const string_books = fs.readFileSync('src/books.json', 'utf-8')
// const books = JSON.parse(string_books);

router.get('/consulta', (req, res) => {
    res.render('index.ejs')
})

router.get('/consulta/socio', (req, res) => {
    res.render('socio.ejs')
})

// router.get('/new-entry', (req, res) => {
//     res.render('new-entry')
// })

// router.post('/', (req, res) => {
//     const {title, author, img, description} = req.body
//     if (!title || !author || !img || !description) {
//         res.status(400).send('Todos los campos deben estar completos')
//         return
//     }

//     let nuevoLibro = {
//         title,
//         author,
//         img,
//         description
//     }

//     books.push(nuevoLibro)
    
//     const json_books = JSON.stringify(books)
//     console.log(books)

//     fs.writeFileSync('src/books.json', json_books)

//     res.redirect('/')



// })

module.exports = router