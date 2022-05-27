const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi( {
    appKey:"YOUR PROJECT APPKEY",
    appSecret:"YOUR PROJECT APPSECRET",
    accessToken:"YOUR PROJCT ACCESS TOKEN",
    accessSecret:"YOUR PROJECT ACCESS SECRET"
})

const rwClient = client.readWrite

module.exports = rwClient
