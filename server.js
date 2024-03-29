require('dotenv').config()
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())



const posts = [ //can be fetched from mongodb 
    {
        username: 'Aryan',
        title: 'Post1',
    },
    {
        username: 'Kenneth',
        title: 'Post2', 
    },
]


app.get('/posts', authenticateToken, (req,res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})



//middleware function for authentication
function authenticateToken(req, res, next) {
    //we pass bearer <token> so we split and choose the second part
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })


}

app.listen(4000)