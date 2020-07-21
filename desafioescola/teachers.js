const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Por favor preencha todos os campos!")
    }

    let { avatar_url, name, birth, education_level, type_of_class, occupation_area } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education_level,
        type_of_class,
        occupation_area,
        created_at
    })

    // return res.send(key)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file erro")

        return res.redirect("/teachers")
    })
}