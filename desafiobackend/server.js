const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("courses", { items: pages })
})

server.get("/about", function(req, res) {

    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/28929274?s=280&v=4",
        company: "Rocketseat",
        description: "Transforme sua carreira e seja um programador desejado no mercado, dominando as ferramentas mais modernas de desenvolvimento web e mobile utlizando as tecnologias mais desejadas no mercado",
        info: "OminiStack:",
        stacks: [
            { name: "JavaScript" },
            { name: "Node.js" },
            { name: "ReactJS" },
            { name: "React Native" }
        ],
        links: [
            { name: "GitHub", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/" }
        ]
    }
    return res.render("about", { about })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const page = pages.find(function(page) {
        return page.id == id
    })

    if (!page) {
        return res.status(404).render("not-found");
    }

    return res.render("course", { item: page })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {})