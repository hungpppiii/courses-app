const mongoose = require('mongoose');

async function connect() {
    try {
        const name = process.env.NAME;
        const password = process.env.PASSWORD;
        await mongoose
            .connect(
                `mongodb+srv://${name}:${password}@cluster0.rhsnast.mongodb.net/?retryWrites=true&w=majority`,
            )
            .then(() => console.log('Connected!'));
        console.log('db connect successfully!');
    } catch (error) {
        console.log('db connect failure!');
    }
}

module.exports = connect;
