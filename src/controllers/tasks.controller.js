
const DataStorage = require('../data-storage')

module.exports = {
    async store(req, res) {
        const { id } = req.params
        const { title } = req.body //task title

        req.project.tasks.push(title)

        const updatedProject = await DataStorage.updateById(
            DataStorage.Entities.Projects,
            id,
            req.project
        )
        return res.send(updatedProject)
    },
}