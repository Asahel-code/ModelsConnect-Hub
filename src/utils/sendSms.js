'use strict';

require('dotenv').config();

const credentials = {
    apiKey: process.env.AT_APIKEY,
    username: process.env.AT_USERNAME
}

const AfricasTalking = require('africastalking')(credentials);

const sms = AfricasTalking.SMS

class sendSms {
    constructor({ phoneNumber, message }) {
        if (!phoneNumber) {
            throw new Error(
                'Missing required parameters: phoneNumber'
            );
        }
        else if (!message) {
            throw new Error(
                'Missing required parameters: message'
            );
        }

        this.phoneNumber = phoneNumber;
        this.message = message;
    }

    async sendMessage() {
        const options = {
            to: [this.phoneNumber],
            message: this.message
        }
        sms.send(options)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

}

module.exports = { sendSms };