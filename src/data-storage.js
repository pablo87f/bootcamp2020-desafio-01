var _ = require('lodash')
var LocalStorage = require('node-localstorage').JSONStorage;
let DataStorage = {}

let localStorage = null

if (typeof localStorage === "undefined" || localStorage === null) {
    localStorage = new LocalStorage('../stored-data');
}

// -----------------------------------------

DataStorage.Entities = {
    'Projects': 'Projects',
    'Tasks': 'Tasks',
}

DataStorage.getAll = (entityName) => {
    return localStorage.getItem(entityName)
}

DataStorage.setAll = (entityName, data) => {
    localStorage.setItem(entityName, data);
    return true
}

DataStorage.findById = (entityName, id) => {
    let allData = DataStorage.getAll(entityName)
    return _.find(allData, { id: parseInt(id) })
}

DataStorage.findByField = async (entityName, filedName, valueToFind) => {

}

DataStorage.insert = async (entityName, data) => {

    let allData = DataStorage.getAll(entityName)
    if (!allData) { allData = [] }

    let projetoExistente = _.find(allData, { id: data.id })
    if (projetoExistente) { throw Error('Já existe um projeto com o mesmo id') }

    let idsExistentes = allData.length > 0 ? allData.map((item) => item.id) : [0]
    let nextId = Math.max.apply(Math, idsExistentes) + 1

    allData.push({ ...data, id: nextId })

    DataStorage.setAll(entityName, allData)
    
    return data
}

DataStorage.updateById = async (entityName, id, newData) => {
    let allData = DataStorage.getAll(entityName)
    let indexRegister = _.findIndex(allData, { id: parseInt(id) })
    allData[indexRegister] = newData
    DataStorage.setAll(entityName, allData)
    return allData[indexRegister]
}

DataStorage.deleteById = async (entityName, id) => {
    let allData = DataStorage.getAll(entityName)
    let indexRegister = _.findIndex(allData, { id: id })
    if (indexRegister > -1) {
        allData.splice(indexRegister, 1);
    }
    DataStorage.setAll(entityName, allData)
}

module.exports = DataStorage

