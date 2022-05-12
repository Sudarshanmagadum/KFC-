const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views')

const partialspath = path.join(__dirname,'./partials')
hbs.registerPartials(partialspath)
const stylepath = path.join(__dirname,'./public')
hbs.registerPartials(stylepath)

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/menu', (req, res) => {
    res.render('menu')
})


app.listen(8000, () => {
    console.log('listening the port in 8000');
})