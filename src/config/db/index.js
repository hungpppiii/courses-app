const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose
            .connect('mongodb://localhost:27017/learnJs')
            .then(() => console.log('Connected!'));
        console.log('db connect successfully!');
    } catch (error) {
        console.log('db connect failure!');
    }
}

module.exports = connect;
