const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../../.env'),
});

module.exports = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    serverUrl: process.env.SERVER_URL,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
