const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth');

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authenticate(email, password);
        res.send( token );
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});




module.exports = router
