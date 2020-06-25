const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const data = require('./data')
const { findIndex } = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

// crindo rotas
server.get('/', function(req, res) {
    return res.render('index', { items: data })
})

server.get('/about', function(req, res) {
    return res.render('about')
})

server.get('/recipes', function(req, res) {
    return res.render('recipes', { items: data })
})

server.get("/recipes/:index", function(req, res) {

    const recipes = data
    const recipeIndex = req.params.index

    // passando o item de acordo com a posição dele no array
    return res.render('recipe', { recipe: recipes[recipeIndex] })

})

server.listen(5000, function() {})