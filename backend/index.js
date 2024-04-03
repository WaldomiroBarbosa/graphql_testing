const express = require('express')
const { readFile } = require('fs')

const app = express()

app.get('/', (request, response) => {

    readFile('./projeto1.html', 'utf8', (err, html) => {
        if (err)
        {
            response.status(404).send('error identified')
        }
        response.send(html)
    })

})

app.listen(process.env.PORT || 3002, () => console.log('App in port 3002'))