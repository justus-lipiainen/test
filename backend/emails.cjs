require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");



module.exports.sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
};