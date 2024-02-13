import cors from 'cors'
import express from 'express'

const app = new express()

app.use(cors())
const port = 8081

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})

app.get('/', (req, res) => {
    res.send({
        health: 'good !'
    })
})
