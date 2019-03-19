const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const db = mongoose.connection
const app = express()
const port = 3000

app.use(bodyParser.json())

let db_status = 'MongoDB connection not successful.'

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => db_status = 'Successfully opened connection to Mongo!')

const postSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Post = mongoose.model('Post', postSchema)

app.get('/', (req, res) => {
  res.send(db_status)
})

app.post('/add', (req, res) => {
  const newPost = new Post(req.body)
  newPost.save((err, post) => { return err ? res.sendStatus(500).json(err) : res.json(post) })
})

app.get('/list', (req, res) => {
  Post.find({}, (error, data) => {
    if (error) return res.sendStatus(500).json(error)
    return res.json(data)
  })
})

app.patch('/update', (req, res) => {
  Post.findByIdAndUpdate(req.body.id, { $set: { title: req.body.title, body: req.body.body } }, (error, data) => {
      if (error) return res.sendStatus(500).json(error)
      return res.json(req.body)
  })
})

app.delete('/delete', (req, res) => {
  Post.findByIdAndRemove(req.body.id, {}, (error, data) => {
    if (error) return res.sendStatus(500).json(error)
    return res.json(data)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
