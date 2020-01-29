
const DataStorage = require('./data-storage')

let Middlewares = {}

Middlewares.checkProjectExists = (req, res, next) => {
    const { id } = req.params
    
    const project = DataStorage.findById(DataStorage.Entities.Projects, id)
    
    if(!project) return res.status(404).send()
    
    req.project = project

    return next()
}

Middlewares.checkRequiredProjectFields = (req, res, next) => {
    const { id, title } = req.body

    if (!id) return req.status(401).send('id is required')
    if (!title) return req.status(401).send('title is required')

    return next()
}


module.exports = Middlewares