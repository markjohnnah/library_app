//routes are just like controller in mvc

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router