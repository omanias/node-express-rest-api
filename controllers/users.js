const { response } = require('express')

const usersGet = (req, res = response) => {
    const query = req.query
    res.status(200).json({
        msg: 'get API - controller',
        query
    })
}

const usersPost = (req, res = response) => {
    const { name, age } = req.body
    res.status(200).json({
        msg: 'post API - controller',
        name,
        age
    })
}
const usersPut = (req, res = response) => {

    const { id } = req.params
    res.status(200).json({
        msg: 'put API - controller',
        id
    })
}
const usersDelete = (req, res = response) => {
    res.status(200).json({
        msg: 'delete API - controller'
    })
}
module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}