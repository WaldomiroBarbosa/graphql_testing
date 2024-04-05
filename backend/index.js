const express = require('express')
const { readFile } = require('fs')
const db = require('./database.js')

const app = express()


app.get ('/', (req, res) => {

    const username = req.body.reg_username
    const password = req.body.reg_userpw

    readFile ('./projeto1.html', 'utf8', (err, html) => {
        if (err)
        {
            res.status(404).send('error identified')
            //res.status(404).json({ message: "Error" })
        }
        res.send(html)
    })

})

app.get ('/download', (req, res) => {
    res.download("projeto1.html")
})

app.listen (process.env.PORT || 3002, () => console.log('App in port 3002'))