"use strict";
require('dotenv').config()

const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: process.env.API_KEY,
});

mailersend.template({
    template_id: 'xxx'
})
.then(response => response.json())
.then(data => {
    console.log(data);
});