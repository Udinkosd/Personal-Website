import express from "express";
import aws from "aws-sdk";

const router = express.Router();
const ses = new aws.SES({ region: "ap-southeast-2" });

router.post("/email", (req, res) => {
  const { email, message, name } = req.body;

  ses.sendEmail({
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: {
          Data: `From Contact: ${name}\n${message}`
        }
      },
      Subject: {
        Data: `Message from ${email}`
      }
    },
    Source: "abdulm098@gmail.com"
  })
  .promise()
  .then(() => {
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  });
});

router.get("/email", (req, res) => {
  res.status(200).json({ message: "This endpoint only accepts POST requests" });
});

export default router;