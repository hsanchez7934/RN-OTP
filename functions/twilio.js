const twilio = require('twilio');
const keys = require('./apiKeys');

const accountSid = keys.sid;
const authToken = keys.token;


module.exports = new twilio.Twilio(accountSid, authToken);
