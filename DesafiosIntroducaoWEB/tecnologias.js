const usuarios = [
    { nome: 'Julia', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Lucas', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Léo', tecnologias: ['HTML', 'Node.js'] }
]

// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
// }

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

