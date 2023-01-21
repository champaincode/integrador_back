const jwt = require('jsonwebtoken');
const User = require('./models/User');
const bcrypt = require('bcrypt')
require('dotenv').config();

const authenticate = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1h' });
    return token;
};

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
};