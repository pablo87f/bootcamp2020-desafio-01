
const DataStorage = require('../data-storage')
module.exports = {
    async index(req, res) {
        const projects = await DataStorage.getAll(DataStorage.Entities.Projects)
        return res.send(projects || [])
    },
    async show(req, res) {
        return res.send(req.project)
    },
    async store(req, res) {
        const { id, title } = req.body

        const project = { id, title }

        const insertedProject = await DataStorage.insert(
            DataStorage.Entities.Projects,
            project
        )

        return res.status(201).send(insertedProject)
    },
    async update(req, res) {

    },
    async destroy(req, res) {

    }
}