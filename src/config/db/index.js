const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(() => console.log('Connected!'));
        console.log('db connect successfully!');
    } catch (error) {
        console.log('db connect failure with error: ', error);
    }
}

module.exports = connect;
