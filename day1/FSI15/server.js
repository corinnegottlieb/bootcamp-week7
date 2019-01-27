const express = require(`express`)
const bodyParser = require(`body-parser`)
const path = require(`path`)
const app = express()

app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const mongoose = require(`mongoose`)
mongoose.connect(`mongodb://localhost/FSI15DB`)

const Schema = mongoose.Schema
const wordSchema = new Schema({
    item: String
})

const Word = mongoose.model(`Word`, wordSchema)

app.get(`/words`, function(req, res){
    Word.find({}).exec(err, words)
    res.send(words)
})

app.post(`/word`, function(req, res){
    let word = new Word(req.body)
    word.save()
    res.send(word)
})

port = 4444
app.listen(port, function(){
console.log(`Running on port ${port}`)
})

