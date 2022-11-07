const app = require('./app')

async function main() {
    await app.listen(app.get('port'))
    console.log('Puto el que lee, pero guarda... en el puerto', app.get('port'))
}

main()