const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi( {
    appKey:"8THvFTR6KUJl1Cla8l9cN6yQt",
    appSecret:"kE4Gf6ngQmzWMd1jUXRDVqtHmNamoQv5ZSDoWRk541GbNDXH0S",
    accessToken:"901783619147931648-pPIZgOB7851pbyDxcYv1bzqTHmGbwcS",
    accessSecret:"bbgkbACUdgdx2ZthN5KiEwCId0FJ6pV9f75T9gbWOYI3l"
})

const rwClient = client.readWrite

module.exports = rwClient