
const DataStorage = require('./data-storage')

let Middlewares = {}
let requestCount = 0

Middlewares.checkProjectExists = (req, res, next) => {
    const { id } = req.params

    const project = DataStorage.findById(DataStorage.Entities.Projects, id)

    if (!project) return res.status(404).send()

    req.project = project

    return next()
}

Middlewares.checkRequiredProjectFields = (req, res, next) => {
    const { id, title } = req.body

    if (!id) return res.status(401).json({ error: 'id is required' })
    if (!title) return res.status(401).json({ error: 'title is required' })

    return next()
}


Middlewares.requestCouter = (req, res, next) => {
    requestCount++
    console.log(`Request count: ${requestCount}`)

    return next()
}


module.exports = Middlewares