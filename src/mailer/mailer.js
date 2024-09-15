const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

exports.sendRegistrationEmail = (email, selectedLanguage) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "merngems@gmail.com",
      pass: "zxwh ggoi jyls svap",
    },
  });

  let htmlFilePath;

  if (selectedLanguage === "English") {
    htmlFilePath = path.join(__dirname, "email-greeting-in-english.html");
  } else if (selectedLanguage === "Chinese") {
    htmlFilePath = path.join(__dirname, "email-greeting-in-chinese.html");
  } else {
    htmlFilePath = path.join(__dirname, "email-greeting-in-bulgarian.html");
  }

  fs.readFile(htmlFilePath, "utf8", (err, html) => {
    if (err) {
      console.error("❌ Error reading HTML file:", err);
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to MERN Gems",
      html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error:", error.message);
      } else {
        console.log("✅ Email sent:", info.response);
      }
    });
  });
};

exports.sendOrderConfirmationEmail = (email, firstName, selectedLanguage) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "merngems@gmail.com",
      pass: "zxwh ggoi jyls svap",
    },
  });

  let htmlFilePath;

  if (selectedLanguage === "English") {
    htmlFilePath = path.join(
      __dirname,
      "email-order-confirmation-in-english.html"
    );
  } else if (selectedLanguage === "Chinese") {
    htmlFilePath = path.join(
      __dirname,
      "email-order-confirmation-in-chinese.html"
    );
  } else {
    htmlFilePath = path.join(
      __dirname,
      "email-order-confirmation-in-bulgarian.html"
    );
  }

  fs.readFile(htmlFilePath, "utf8", (err, html) => {
    if (err) {
      console.error("❌ Error reading HTML file:", err);
      return;
    }

    html = html.replace("{{ firstName }}", firstName);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Order Confirmation",
      html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error:", error.message);
      } else {
        console.log("✅ Email sent:", info.response);
      }
    });
  });
};
