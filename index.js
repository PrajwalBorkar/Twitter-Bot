const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v2.tweet("Hello Twitter! (Tweeted using twitter Bot)")
    } catch (e) {
        console.error(e);
    }

}

const job = new CronJob("40 13 * * *", () => {    //("0 5 * * *") it will tweet at 5am
    console.log("cron job started!");
    tweet()
})

job.start();

// tweet()