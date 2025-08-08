const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const connectCloudinary = () => {
    cloudinary.config({
        cloud_name: 'dclhtjibe',
        api_key: '528227686764424',
        api_secret: 'zi4vCH2xRmt-m9LyNEaEAvYm6zc',
    });
};

module.exports = connectCloudinary;
