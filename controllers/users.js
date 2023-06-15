const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const { q, id } = req.query;
    res.json({
        msg: 'get api - controller',
        q,
        id,
    });
};

const postUsers = (req = request, res = response) => {
    const { name, age } = req.body;
    res.status(201).json({
        msg: 'post api - controller',
        name,
        age,
    });
};

const putUsers = (req = request, res = response) => {
    const { id } = req.params;
    res.status(201).json({
        msg: 'put api - controller',
        id,
    });
};

const patchUsers = (req = request, res = response) => {
    res.status(201).json({
        msg: 'patch api - controller'
    });
};

const deleteUsers = (req = request, res = response) => {
    res.status(201).json({
        msg: 'delete api - controller'
    });
};

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
};